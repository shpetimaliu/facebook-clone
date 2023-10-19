const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

// use
app.use(cors());
app.use(express.json());

readdirSync("./routers").map((r) => app.use("/", require(`./routers/${r}`)));

// database
mongoose
  .connect(process.env.MONBODBCONNECTOR, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB has connected succesfully"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}-Port`);
});
