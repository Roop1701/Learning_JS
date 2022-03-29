const express = require("express");
const app = express();

app.get("/user/:id/:username", (req, res) => {
  let userID = req.params.id;
  let user = req.params.username;
  res.render("index.ejs", {
    id: userID,
    username: user,
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
