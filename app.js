// EXPRESS
import express from "express";
// API DO back4Apps
import parse from "parse/node.js";

// .env
import env from "dotenv";

env.params = {
  env: process.env.API_ID,
  password: process.env.JS_KEY,
};
exports = env.params;

const app = express();
const port = 3000;

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

initialize(params.API_ID, params.JS_KEY);
//PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
serverURL = "https://parseapi.back4app.com/";
