const getPool = require("../common/pool"); //dbms collection

//이곳에 필요한 sql 등록
const sql = {
  boardList:
    //   번호, 타이틀, 이름, 작성일, 조회수
    //조회니까 SELECT??
    "select * from board",
  //"SELECT id, title, name, createAt, cnt FROM board"
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (item, callback) => {
    let conn = null;
    try {
      console.log("00");
      conn = await getPool().getConnection();
      console.log("11");
      //db insert
      //여기서 sql.boardList 가 맞는지 ...?
      const [resp] = await conn.query(sql.boardList); //지우거나 []
      console.log("22");
      callback({ status: 200, message: "ok", data: resp }); //이걸 전달하겠다 ppt21페이지처럼
    } catch (error) {
      return { status: 500, message: "게시글 조회 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
