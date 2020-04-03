const db = require("../data/dbConfig.js");

module.exports = {
  getInterestedStack,
  getInterestedStackById
};

function getInterestedStack() {
  return db("interested_stacks");
}

function getInterestedStackById(id) {
  return db("interested_stacks")
    .where({ id })
    .first();
}
