exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    tbl.string("start_data").notNullable();
    tbl.string("end_date").notNullable();
    tbl.string("image");
    tbl.string("description", 1000).notNullable();
    tbl.string("role", 128).notNullable();
    tbl.string("stack", 512).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
