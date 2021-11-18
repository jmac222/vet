require("dotenv").config();
require("express-async-errors");
//core
const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");



const port = process.env.PORT || 3000;

const start = async () => {
    try {
      connectDB(process.env.MONGO_URL);
      app.listen(3000, () => {
        console.log(`listening @ ${port}`);
      });
    } catch (err) {
      console.log(err);
    }
  };
  start()