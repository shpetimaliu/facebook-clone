const express = require("express");
const cors = require("cors");
const app = express();
const useRouters = require("./routers/user");
const { readdirSync } = require("fs");

// use
app.use(cors());

readdirSync("./routers").map((r) => app.use("/", require(`./routers/${r}`)));

app.listen(3001, () => {
  console.log("Server is running on 3001-Port");
});
