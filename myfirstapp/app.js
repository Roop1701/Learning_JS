const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("<a href='/contact'>Contact</a>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to contact page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to about page</h1>");
});

app.get("*", (req, res) => {
  res.send('404.This Page Does not Exsist.<a href="/">Go to Home Page</a>');
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
