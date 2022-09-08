/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("shows", (table) => {
      table.string("show_id").primary();
      table.string("type").notNullable();
      table.string("title").notNullable();
      table.string("director").notNullable();
      table.string("country").notNullable();
      table.string("date_added").notNullable();
      table.integer("release_year").unsigned().notNullable();
      table.string("rating").notNullable();
      table.string("duration").notNullable();
      table.string("listed_in").notNullable();
      table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("shows");
};
