const getPool = require("../common/pool"); //dbms collection

//이곳에 필요한 sql 등록
const sql = {
  boardList:
    //   번호, 타이틀, 이름, 작성일, 조회수
    //조회니까 SELECT??
    "SELECT * FROM board",
  //"SELECT id, title, name, createAt, cnt FROM board"
  insert: "SELECT name, title, content FROM board",
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (callback) => {
    //item 빼고 callback만 남겨둠
    let conn = null;
    try {
      console.log("00");
      conn = await getPool().getConnection();
      console.log("11");
      //db insert
      //여기서 sql.boardList 가 맞는지 ...?
      const [resp] = await conn.query(sql.boardList, []); //지우거나 [] 원래 난 아무것도 안 적음
      console.log("22", resp); //여기서 콘솔 한번 찍어주는 거 추천
      callback({ status: 200, message: "ok", data: resp }); //이걸 전달하겠다 ppt21페이지처럼
    } catch (error) {
      return { status: 500, message: "게시글 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  insert: async (item, callback) => {
    //매개변수 두개인 이유 insert 데이터 받아야 되니까
    const { name, title, content } = item;
    let conn = null;
    try {
      console.log("00");
      conn = await getPool().getConnection();
      console.log("11");
      callback({
        status: 200,
        message: "OK",
      });
    } catch (error) {
      return { status: 500, message: "게시물 입력 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
