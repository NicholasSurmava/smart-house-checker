const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.get("/heartbeat", (req, res) => {
  res.send({
    heartbeat: "badum badum badum",
  });
});

module.exports = app;
