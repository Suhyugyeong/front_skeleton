const bcrypt = require("bcrypt"); //bcrypt: 비밀번호 해싱을 위한 라이브러리.
const getPool = require("../common/pool"); //데이터베이스 연결을 관리하는 풀을 반환하는 함수
const sql = {
  //sql 쿼리를 담고 있는 객체
  //이메일 중복을 체크하기 위한 sql
  //?는 프로그램 데이터가 들어갈 자리
  //이는 주로 사용자의 로그인 시, 해당 이메일이 데이터베이스에 존재하는지를 확인하는 데 사용될 것
  checkId: "SELECT * FROM user WHERE email = ?",
  //이 쿼리는 user 테이블에 새로운 사용자 정보를 추가
  //?는 이후에 입력될 값을 나타내며, 프리페어드 스테이트먼트(Prepared Statement)에서 실제 값으로 대체됩니다.
  //?는 프리페어드 스테이트먼트에 사용되는 매개변수
  signup: "INSERT INTO user (name, email, password) VALUES (?,?,?)",
};

//DAO (Data Access Object) - DBMS(데이터베이스 연동)처리
const userDAO = {
  //item - 클라이언트 요청 데이터
  //callback - dbms가 성공한 후에 호출할 개발자 함수
  signup: async (item, callback) => {
    //item: 클라이언트로부터 전달된 사용자 정보를 담고 있는 객체입니다.
    //callback: DBMS가 성공한 후에 호출될 개발자 함수입니다.
    let conn = null;
    try {
      //pool에서 connection 획득하고
      conn = await getPool().getConnection();
      // 연결 풀을 생성하고 반환하는 역할을 하는 함수
      //getConnection()은 연결 풀에서 데이터베이스 연결을 가져오는 함수
      //getPool().getConnection()을 호출하여 데이터베이스 연결 풀에서 연결 객체(conn)를 얻습니다.

      console.log("dao", item);
      //promise를 반환한다면 return new Promise(...) 혹은 async 함수 안에서 awit키워드를 사용할 것..
      //이메일 check sql 실행
      const [respCheck] = await conn.query(sql.checkId, item.email); //item 객체에서 email 프로퍼티를 추출한 값, 단일값
      //sql.checkId에 정의된 SQL 쿼리를 실행하고, item.email을 해당 쿼리에 전달합니다.
      if (respCheck[0]) {
        //배열의 첫 번째 요소가 존재하고, 값이 있는 경우(즉, 배열이 비어있지 않은 경우), 조건문은 참
        //이메일로 select 되는 데이터가 있다면 이미 item.email로 가입된 회원이 있다
        callback({ status: 500, message: "사용자가 존재합니다." });
      } else {
        //데이터가 없다면 이메일 중복되지 않는다는 이야기
        //회원가입하게 table에 insert하면 됨
        //유저 password는 hash 문자열로 변형시켜서 저장
        const salt = await bcrypt.genSalt();
        //genSalt() 함수를 통해 생성된 솔트는 해시 함수에 전달되어 비밀번호와 함께 사용되어 최종적인 안전한 해시를 생성
        bcrypt.hash(item.password, salt, async (error, hash) => {
          //item.password: 해싱할 원본 비밀번호입니다.
          //salt: bcrypt에서 사용되는 소금(salt) 값입니다. 이 소금은 보안을 강화하기 위해 비밀번호에 더해지는 임의의 값입니다.
          //async (error, hash) => {...}: 비동기 함수로서, 비밀번호 해싱이 완료된 후 실행될 콜백 함수입니다. error 매개변수에는 에러가 발생했을 경우 에러 정보가 전달되고, hash 매개변수에는 해싱된 비밀번호가 전달됩니다.
          if (error)
            callback({ status: 500, message: "암호화 실패", error: error });
          else {
            //db insert
            const [resp] = await conn.query(sql.signup, [
              //conn.query는 데이터베이스에 대한 쿼리를 실행
              //conn.query 메서드는 배열 형태의 결과를 반환하므로, 배열 디스트럭처링을 사용:배열의 첫 번째 요소만을 추출하는 구문
              item.name,
              item.email,
              hash,
            ]); //sql.signup에 해당하는 SQL 쿼리문을 실행하면서 배열 [item.name, item.email, hash]의 값들을 SQL 쿼리의 매개변수로 전달
            callback({ status: 200, message: "ok", data: resp });
          }
        });
      }
    } catch (error) {
      return { status: 500, message: "유저 입력 실패", error: error };
    } finally {
      //정상실행되든 에러 발생되든 마지막에 처리할 로직이 있다면
      //사용했던 connection을 pool에 반환해서 다른곳에서 사용하게끔
      if (conn !== null) conn.release();
      //conn.release()는 데이터베이스 연결을 풀에 반환하는 역할을 합니다. 이는 데이터베이스 연결을 계속해서 사용하지 않는다면, 해당 연결을 다른 요청이나 작업에서 사용할 수 있도록 하는 것입니다.
    }
  },
  login: async (item, callback) => {
    //매개변수(parameter)는 함수의 정의 부분에서 선언되는 변수이고, 함수가 호출될 때 인자(argument)로 전달되는 값이 해당 매개변수에 자동으로 할당됩니다.
    //함수 내부에서 이 매개변수를 사용할 수 있습니다.
    //따라서 함수의 매개변수는 별도의 const나 let 선언이 필요 없이 함수 내부에서 직접 사용할 수 있습니다
    //유저 입력 데이터 획득
    const { email, password } = item; //json 으로 받아야되니까 중괄호 ?????????????????
    let conn = null;
    try {
      console.log("00");
      conn = await getPool().getConnection();
      console.log("11");
      //sql 실행.. 리턴값은 db에 저장된 유저 정보
      const [user] = await conn.query(sql.checkId, [email]); //[email]은 배열 리터럴 구문이니까 email을 담은 배열을 생성
      console.log("22", user);
      if (!user[0]) {
        //db에 데이터가 없다는 이야기.. 유저가 입력한 이메일이 잘못되었다는 이야기, 배열 user가 비어있거나 첫 번째 요소가 존재하지 않을 때 참이 되는 조건
        callback({ status: 500, message: "아이디, 패스워드를 확인해주세요." });
      } else {
        //db 데이터가 있다는 이야기.. 유저 입력 비밀번호와 db에서 뽑은 비밀번호 비교
        console.log("33", password, user[0].password);
        //db에 비밀번호가 해시로 저장되어 있어서.. 유저 입력 비밀번호를 해시로 만들어 비교해야 한다..
        bcrypt.compare(password, user[0].password, async (error, result) => {
          if (error) {
            //해당 사용자의 이메일이 없음
            callback({
              status: 500,
              message: "아이디, 패스워드를 확인해주세요.",
            });
          } else if (result) {
            //result가 true이면, 사용자의 아이디와 패스워드가 일치했다는 것을 의미
            console.log("44");
            callback({
              status: 200,
              message: "OK",
              data: { name: user[0].name },
              email: user[0].email,
            });
          } else {
            //bcrypt.compare 메서드가 정상적으로 실행되었지만, 비밀번호가 일치하지 않는 경우
            callback({
              status: 500,
              message: "아이디, 패스워드를 확인해주세요.",
            });
          }
        });
      }
    } catch (e) {
      return { status: 500, message: "로그인 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = userDAO;

//프론트엔드에서 Signup 내부에 signup Signin 내부에 login
