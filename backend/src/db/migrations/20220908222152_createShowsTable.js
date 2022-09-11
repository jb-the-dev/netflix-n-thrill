/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("shows", (table) => {
      table.increments("show_id").primary();
      table.string("type").notNullable();
      table.string("title").notNullable();
      table.string("director").notNullable();
      table.string("country").notNullable();
      table.string("date_added").notNullable();
      table.string("release_year").notNullable()
      table.string("rating").notNullable();
      table.string("duration").notNullable();
      table.string("listed_in").notNullable();
      table.timestamps(true, true);
    }).raw('ALTER SEQUENCE shows_show_id_seq RESTART WITH 8808')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("shows");
};
