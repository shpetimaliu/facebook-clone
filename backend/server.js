const express = require("express");
const cors = require("cors");
const app = express();
const useRouters = require("./routers/user");

// use
app.use(cors());
app.use("/", useRouters);

// Route

app.listen(3001, () => {
  console.log("Server is running on 3001-Port");
});
