const express = require("express");

const app = express();

//const variable voor PORT
const port = process.env.port || 5000;

//ROUTES
app.get("/", (req, res) => {
  app.use(express.static("public"));
  res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact page</h1>");
});

app.get("*", (req, res) => {
  res.send("Error! 404 this route doesn't exist");
});

//Server online notice: node server.js
app.listen(port, () => console.log(`Server started on port ${port}`));
