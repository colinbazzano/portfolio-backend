const db = require("../data/dbConfig.js");

module.exports = {
  getProficientStacks,
  getProficientStacksById
};

function getProficientStacks() {
  return db("proficient_stacks");
}

function getProficientStacksById(id) {
  return db("proficient_stacks")
    .where({ id })
    .first();
}
