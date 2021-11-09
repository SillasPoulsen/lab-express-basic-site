const express = require("express");

const app = express();

app.use(express.static("public"));

//Get requests

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/public/views/work.html");
});

//Listen
app.listen(3000, () => {
  console.log("server is running");
});
