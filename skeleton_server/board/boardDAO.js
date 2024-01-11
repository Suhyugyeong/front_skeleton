const getPool = require("../common/pool"); //dbms collection

//sql 객체에 sql 쿼리를 정의
const sql = {
  boardList: "SELECT * FROM board",
  insert: "INSERT INTO board (name, title, content) VALUES(?,?,?)",
  //프리페어드 스테이먼트(Prepared Statement)에서 사용되는 Placeholder입니다. 프리페어드 스테이먼트를 사용하면 SQL 쿼리에 동적으로 값을 삽입할 때, 값이 문자열이던지 숫자던지 상관없이 안전하게 처리할 수 있습니다.
  board: "SELECT * FROM board WHERE id = ?", //select문 where 10번글... id가 pk임
  delete: "DELETE FROM board WHERE = ?",
  update: "UPDATE board SET title = ?, content = ? WHERE id = ?",
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (callback) => {
    //item 빼고 callback만 남겨둠
    let conn = null;
    try {
      conn = await getPool().getConnection();
      //db insert
      const [resp] = await conn.query(sql.boardList, []); //지우거나 [] 원래 난 아무것도 안 적음
      console.log("000", resp); //여기서 콘솔 한번 찍어주는 거 추천
      callback({ status: 200, message: "ok", data: resp }); //이걸 전달하겠다 ppt21페이지처럼
    } catch (error) {
      return { status: 500, message: "게시글 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
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
      ]); //sql문 자체를 이해못한듯
      console.log("000", resp);
      callback({
        status: 200,
        message: "OK",
        data: resp, //data 안 썼었음
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 입력 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  board: async (item, callback) => {
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
      });
    } catch (error) {
      console.log(error);
      return { status: 500, message: "게시물 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  delete: async (item, callback) => {},
  update: async (item, callback) => {},
};

module.exports = boardDAO;
