const service = require("./shows-service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/* This file contains the "business logic" */

// VALIDATORS
const showExists = (req, res, next) => {
    let show = service.read(req.params.show_id)
    //! `show` is not returning as a data object
    console.log("SHOW", show)
    if (show) {
        res.locals.show = show;
        return next();
    }
    return next({ status: 404, message: `Show cannot be found.` });
}

const VALID_PROPERTIES = [
    "type",
    "title",
    "director",
    "country",
    "date_added",
    "release_year",
    "rating",
    "duration",
    "listed_in",
  ];

  async function hasRequiredProperties(req, res, next) {
    const { data = {} } = req.body;
  
    VALID_PROPERTIES.forEach((property) => {
      if (!data[property]) {
        return next({
          status: 400,
          message: `A '${property}' property is required.`,
        });
      }
    });
    next();
  }
  

// HANDLERS
async function list(req, res, next) {
    res.json({ data: await service.list() });
  }

  function read(req, res) {
    res.json({ data: res.locals.show });
  }

  async function create(req, res) {
    console.log("data", req.body.data)
    let newShow = await service.create(req.body.data);
  

    //NB! currently only functional in Postman
    res.status(201).json({ data: {
      ...newShow,
      show_id: newShow.show_id + 8810
      }
     });
  }

  async function update(req, res, next) {
    const { show_id } = res.locals.show;
    const showData = req.body.data;
    console.log("DATA??", req.body.data);
    const updatedShow = {
      ...showData,
      show_id: show_id,
    };
    res.json({ data: await service.update(updatedShow) });
  }

  async function destroy(req, res, next) {
    const { show } = res.locals;
    await service.delete(show.show_id);
    res.sendStatus(204);
  }

  module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(showExists), read],
    create: [asyncErrorBoundary(hasRequiredProperties), asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(showExists), 
        asyncErrorBoundary(hasRequiredProperties),asyncErrorBoundary(update)],
    destroy: [asyncErrorBoundary(showExists), asyncErrorBoundary(destroy)]
  }
