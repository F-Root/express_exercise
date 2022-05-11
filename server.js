const express = require("express");
require("dotenv").config();
const app = express();

app.get("", (req, res) => {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
