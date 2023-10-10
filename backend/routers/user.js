const express = require("express");
const app = express();
const router = express.Router();

const { register } = require("../controllers/user");

router.get("/register", (req, res) => {
  res.send("register");
});
router.post("/register", register);

module.exports = router;
