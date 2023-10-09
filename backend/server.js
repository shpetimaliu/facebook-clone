const express = require("express");
const cors = require("cors");
const app = express();
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/about", (req, res) => {
  res.send("Facebook Clone is being created by Shpëtim Aliu");
});

app.listen(3001, () => {
  console.log("Server is running on 3001-Port");
});
