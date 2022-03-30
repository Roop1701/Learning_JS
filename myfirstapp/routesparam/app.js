const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/questions/:id/:title", (req, res) => {
  res.send("This route handle all the questions");
});

app.get("/user/:id/:username", (req, res) => {
  let user = req.params.username;
  let userId = req.params.id;
  //res.send("This is users");
  res.send(`This route will handel ${user} profile that has id: ${userId}`);
});

app.get("", (req, res) => {
  res.send("This Route Handles all the users of stackoverflow");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
