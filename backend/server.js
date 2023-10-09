const express = require("express");
const cors = require("cors");

const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

// use
app.use(cors());

readdirSync("./routers").map((r) => app.use("/", require(`./routers/${r}`)));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on ${port}-Port`);
});
