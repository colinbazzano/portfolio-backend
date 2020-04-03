// Clean up file using knex-cleaner. Not need to truncate in the other seed files as this will run first.
const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: "truncate",
    ignoreTables: ["knex_migrations", "knex_migrations_lock"] // look in the DB in sqlite studios and see those files, we want to keep them.
  });
};
