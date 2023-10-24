// boiler plate
const express = require("express");
const path = require("path");

const server = express();
const names = [
  "Shiv",
  "Kareem",
  "Yezin",
  "Fatima",
  "Elise",
  "Samah",
  "Tessa",
  "Ben",
  "Yomna",
];

const greetings = ["Howdy", "Hi", "Hello", "Welcome"];

server.use(require("morgan")("dev"));
server.use(express.static(path.join(__dirname, "public")));
server.disable("x-powered-by");

server.get("/", (req, res) => {
  const name =
    req.query.name || names[Math.floor(Math.random() * names.length)];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.send(`${greeting}, ${name} greatness awaits you!`);
});

server.listen(3030, "10.20.115.27");
