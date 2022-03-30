const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/questions", (req, res) => {
  let questions = [
    { title: "What is node.js ?", user: "John", votes: "9.5" },
    { title: "What is Express ?", user: "Tom", votes: "8.5" },
    { title: "What is MongoDB ?", user: "Rick", votes: "7.5" },
    { title: "What is Angular ? ", user: "John", votes: "9.6" },
  ];
  res.render("index", { questions: questions });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
