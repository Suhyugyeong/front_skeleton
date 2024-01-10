const getPool = require("../common/pool"); //dbms collection

//이곳에 필요한 sql 등록
const sql = {
  boardList:
    //   번호, 타이틀, 이름, 작성일, 조회수
    "INSERT INTO board (id, title, name, createAt, cnt) VALUES (?, ?, ?, ?, ?)",
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router에 의해 실행 dbms
  boardList: async (item, callback) => {
    const { id, title, name, createAt, cnt } = item;
    let conn = null;
    try {
      console.log("00");
      conn = await getPool().getConnection();
      console.log("11");
      //db insert
      //여기서 sql.boardList 가 맞는지 ...?
      const [resp] = await conn.query(sql.boardList, [
        item.id,
        item.title,
        item.name,
        item.createAt,
        item.cnt,
      ]);
      callback({ status: 200, message: "ok", data: resp });
    } catch (error) {
      return { status: 500, message: "게시글 등록 실패", error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
