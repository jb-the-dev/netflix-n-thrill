const router = require("express").Router()
const controller = require("./shows-controller");

/* This file defines the routes and which HTTP methods work with each */

router.route("/")
    .get(controller.list)
    .post(controller.create)
    // .all()
    
    router.route("/:show_id")
    .put(controller.update)
    .delete(controller.destroy)
    // .all()