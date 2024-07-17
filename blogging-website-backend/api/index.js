require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

const connectDB = require("../config/dbconnect");
const mongoose = require("mongoose");
connectDB();
app.use(express.json()); //middleware to parse json

app.use("/api", require("../routes/userRoutes"));

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");

  app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log("Error while connection to mongodb: ", err);
});
