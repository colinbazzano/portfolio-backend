const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProjectById
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
