const db = require("../data/dbConfig");

module.exports = {
  getProjects
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
