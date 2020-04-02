exports.up = function(knex) {
  return knex.schema.createTable("proficient_stacks", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    tbl.string("specifics");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("proficient_stacks");
};
