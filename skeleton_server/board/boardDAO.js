const getPool = require("../common/pool"); //dbms collection

//이곳에 필요한 sql 등록
const sql = {
  boardList: "SELECT * FROM board",
  insert: "INSERT INTO board (name, title, content) VALUES(?,?,?)",
  board: "SELECT * FROM board WHERE id", //select문 where 10번글... id가 pk임
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (callback) => {
    //item 빼고 callback만 남겨둠
    let conn = null;
    try {
      conn = await getPool().getConnection();
      //db insert
      //여기서 sql.boardList 가 맞는지 ...?
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
    //item은 몇 번 글이냐,
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [resp] = await conn.query(sql.board, [
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
      return { status: 500, message: "게시물 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
