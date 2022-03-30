const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/user/:id/:username", (req, res) => {
  let userID = req.params.id;
  let user = req.params.username;
  res.render("index", {
    id: userID,
    username: user,
  });
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});
