const express = require("express");
const app = express();
const router = express.Router();

const { register, activateAccount } = require("../controllers/user");

router.post("/register", register);
router.post("/activate", activateAccount);

module.exports = router;
