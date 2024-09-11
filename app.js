//npm init -y -> initalizes my folder as node js
// npm i express
// app.js
const express = require("express");
const harryPotterBooks = require("./data");
const app = express(); //app is an instance of express

app.use(express.json()); //so the app can recieve json info
app.get("/api/books", (req, res) => {
  return res.status(200).json(harryPotterBooks);
});

app.post("/api/create", (req, res) => {
  console.log(req.body);
  const newBook = {
    bookName: req.body.bookName,
    author: req.body.author,
    relaseDate: req.body.date,
  };
  harryPotterBooks.push(newBook);
  res.status(201).json({
    message: "Added Book!",
    data: harryPotterBooks,
  });
});
app.listen(8000, () => {
  console.log("IT WORKS");
});
