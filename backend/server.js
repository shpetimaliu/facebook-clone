const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/about", (req, res) => {
  res.send("Facebook Clone is being created by Shpëtim Aliu");
});

app.listen(3001, () => {
  console.log("Server is running on 3001-Port");
});
