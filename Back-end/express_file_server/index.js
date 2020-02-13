const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact page</h1>");
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
