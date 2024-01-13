const getPool = require("../common/pool"); //dbms collection

//sql 객체에 sql 쿼리를 정의
const sql = {
  boardList: "SELECT * FROM board",
  insert: "INSERT INTO board (name, title, content) VALUES(?,?,?)",
  //프리페어드 스테이먼트(Prepared Statement)에서 사용되는 Placeholder입니다. 프리페어드 스테이먼트를 사용하면 SQL 쿼리에 동적으로 값을 삽입할 때, 값이 문자열이던지 숫자던지 상관없이 안전하게 처리할 수 있습니다.
  //"board" 테이블에 "name", "title", "content" 열에 해당하는 값을 추가
  board: "SELECT * FROM board WHERE id = ?", //select문 where 10번글... id가 pk임
  delete: "DELETE FROM board WHERE id = ?",
  update: "UPDATE board SET title = ?, content = ? WHERE id = ?",
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (callback) => {
    //item 빼고 callback만 남겨둠
    //함수에 전달되는 파라미터는 함수 내부에서 사용되는 값, 함수 내에서 변수로 활용됨
    //여기서 item을 사용하지 않았다는건... 게시판 목록을 가져오는 기능만 수행하면 되기때문에 signup같이 사용자에게 받을 정보가 없으므로!!
    let conn = null;
    try {
      conn = await getPool().getConnection(); //비동기적으로 데이터베이스 풀(pool)에서 커넥션(connection)을 가져오는 코드
      const [resp] = await conn.query(sql.boardList, []);
      //[resp] 배열 디스트럭처링을 사용해서 query()메서드에서 반환되는 결과 배열 중 첫번째 원소만을 추출, 결과적으로 resp는 첫번째 행의 데이터를 담은 객체를 포함하는 배열이 될 것임..
      //conn.query 로 데이터베이스 쿼리를 실행.. 지우거나 [] 원래 난 아무것도 안 적음 => 쿼리에서 사용되는 매개변수가 없음을 의미, 필요한 매개변수가 없다..
      console.log("000", resp); //여기서 콘솔 한번 찍어주는 거 추천
      callback({ status: 200, message: "ok", data: resp }); //이걸 전달하겠다 ppt21페이지처럼
    } catch (error) {
      return { status: 500, message: "게시글 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release(); // 커넥션 획득 후 사용이 끝난 경우에는 반드시 release() 메서드
    }
  },
  insert: async (item, callback) => {
    //매개변수 두개인 이유 insert 데이터 받아야 되니까
    // const { name, title, content } = item; //
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.insert, [
        item.name,
        item.title,
        item.content,
      ]);
      console.log("000", resp);
      callback({
        status: 200,
        message: "OK",
        data: resp,
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 입력 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  board: async (item, callback) => {
    //게시글 상세보기
    //item이 id값이다
    //item은 몇 번 글이냐,
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.board, item);
      console.log("000", resp);
      //where조건에 의해 디비에서 하나의 row만 획득하나 select문은 항상 여러건의 테이터를 획득할 수 있는 상황이기 때문에
      //배열로, 즉 [{~~~}] 이런식으로 넘어옴
      callback({
        status: 200,
        message: "OK",
        data: resp[0], //한건밖에 안 뽑히나 배열로 뽑히니까 인덱스로 지정을 해줘야 함 sql은
        //일반적으로 쿼리 결과는 여러 행을 가져올 수 있으며, 각 행은 객체로 표현됩니다. 따라서 쿼리 결과를 다룰 때 배열에서 첫 번째 행의 데이터를 가져오기 위해 resp[0]를 사용
        //단일 행이 필요한 경우는 DB에서 특정 조건에 유일한 결과를 예상할 때, 한가지 정보만 필요할 때 여러행은 리스트 형태의 정보가 필요할 때, 아니면 특정 조건에 맞는 모든 결과를 필요로 할 때
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  delete: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.delete, item); //item은 데이터베이스 쿼리의 바인딩 매개변수에 해당합니다. 여기서 item이 id
      console.log("000", resp);
      callback({
        //비동기 작업이 완료되면
        status: 200,
        message: "OK",
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 삭제 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  update: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.update, [
        item.title,
        item.content,
        item.id,
      ]); //여기선 데이터 많으니까 배열로
      console.log("000", resp);
      callback({
        status: 200,
        message: "OK",
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 수정 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;

//베얄 디스트럭처링은 배열에서 원소를 추출하여 변수에 할당하는 js의 구문. 이를 통해 배열에서 특정 위치의 값을 손쉽게 변수에 저장 가능
