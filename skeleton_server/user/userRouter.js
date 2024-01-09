const express = require("express");
const router = express.Router();
const userDAO = require("./userDAO");

//유저 업무와 관련된 요청이 들어왔을 때 그 요청을 처리하는 역할
router.get("/signup", async (req, res, next) => {
  console.log("user router, singup...");
  userDAO.signup(null, (resp) => {
    //resp  ??
    res.send("success");
  });
});

module.exports = router;
