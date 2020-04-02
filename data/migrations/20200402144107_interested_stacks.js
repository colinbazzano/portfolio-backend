exports.up = function(knex) {
  return knex.schema.createTable("interested_stacks", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .nonNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("interested_stacks");
};
