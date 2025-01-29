const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const clientIp = req.ip;
  const userAgent = req.get("User-Agent");
  const language = req.get("Accept-Language");

  res.json({ ipaddress: clientIp, language: language, software: userAgent });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
