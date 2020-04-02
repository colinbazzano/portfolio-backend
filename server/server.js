const express = require("express");

const server = express();

const event = new Date();

server.get("/", (req, res) => {
  res.send(`<h2>All good here!</h2>`);
});

// use this when you are ready
// function logger(req, res, next) {
//     console.log(`${req.method} to ${req.originalUrl} at ${event.toISOString()}`);
//     next();
// }

// server.use(logger);

server.use(express.json());

module.exports = server;
