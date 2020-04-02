const cleaner = require("knex-cleaner");
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
  });
};

exports.down = function(knex) {};
