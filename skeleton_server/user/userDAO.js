const bcrypt = require("bcrypt");
const getPool = require("../common/pool");
const sql = {
  //이메일 중복을 체크하기 위한 sql
  //?는 프로그램 데이터가 들어갈 자리
  checkId: "SELECT * FROM user WHERE email = ?",
  signup: "INSERT INTO user (name, email, password) VALUES (?,?,?)",
};

//DAO (Data Access Object) - DBMS(데이터베이스 연동)처리
const userDAO = {
  //item - 클라이언트 요청 데이터
  //callback - dbms가 성공한 후에 호출할 개발자 함수
  signup: async (item, callback) => {
    let conn = null;
    try {
      //pool에서 connection 획득하고
      conn = await getPool().getConnection();

      console.log("dao", item);

      //이메일 check sql 실행
      const [respCheck] = await conn.query(sql.checkId, item.email);
      if (respCheck[0]) {
        //이메일로 select 되는 데이터가 있다면 이미 item.email로 가입된 회원이 있다
        callback({ status: 500, message: "사용자가 존재합니다." });
      } else {
        //데이터가 없다면 이메일 중복되지 않는다는 이야기
        //회원가입하게 table에 insert하면 됨
        //유저 password는 hash 문자열로 변형시켜서 저장
        const salt = await bcrypt.genSalt();
        bcrypt.hash(item.password, salt, async (error, hash) => {
          if (error)
            callback({ status: 500, message: "암호화 실패", error: error });
          else {
            //db insert
            const [resp] = await conn.query(sql.signup, [
              item.name,
              item.email,
              hash,
            ]);
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
    }
  },
};

module.exports = userDAO;
