const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("In / route!");
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Example app listening.");
});
