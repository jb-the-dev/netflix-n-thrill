const data = require("./00-shows.json")

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE shows RESTART IDENTITY CASCADE")
    .then(() => knex("shows").insert(data))
    // .then(() => knex.raw("COPY shows FROM './netflix1.csv' WITH (FORMAT csv);"))
};