const express = require("express");
const cors = require("cors");

const server = express();
const ProjectRouter = require("../helpers/projects-router.js");
const ProficientStacksRouter = require("../helpers/proficient_stacks-router.js");
const InterestedStacksRouter = require("../helpers/interested_stacks-router.js");
const EmailRouter = require("../email/index.js");

const event = new Date();

server.get("/", (req, res) => {
  res.send(`<h2>All good here!</h2>`);
});

// use this when you are ready
function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl} at ${event.toISOString()}`);
  next();
}

server.use(logger);
server.use(cors());

server.use(express.json());
// Routers
server.use("/api/projects", ProjectRouter);
server.use("/api/proficient-stacks", ProficientStacksRouter);
server.use("/api/interested-stacks", InterestedStacksRouter);
server.use("/api/email", EmailRouter);

module.exports = server;
