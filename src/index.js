const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/smart-house/status", (req, res) => {
  console.log("POST smart house checker route");
});

app.get("/smart-house/status/:id", (req, res) => {
  console.log("smart house checker route");
});

app.get("/heartbeat", (req, res) => {
  res.send({
    heartbeat: "badum badum badum",
  });
});

module.exports = app;
