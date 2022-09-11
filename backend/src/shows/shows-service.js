const knex = require('../db/connection')

/* This file contains code directly interacting with the database */

function list(){
    return knex("shows").select("*")
}

function read(show_id){
    return knex("shows")
        .select("*")
        .where({ show_id })
        // .then(data => console.log("YOOHOO", data))
        // .then(createdRecords => createdRecords[0])
        .first();
}

function create(show){
    return knex("shows")
        .insert(show)
        .returning("*")
        .then(createdRecords => createdRecords[0])
}

//TODO review/test the syntax on this call
function update(updatedShow) {
    return knex("shows")
      .select("*")
      .where({ show_id: updatedShow.show_id })
      .update(updatedShow)
      .then(() => read(updatedShow.show_id));
  };

const destroy = (show_id) => {
    return knex("shows").where({ show_id }).del();
  };

module.exports = {
    list,
    read,
    create,
    update,
    destroy
}