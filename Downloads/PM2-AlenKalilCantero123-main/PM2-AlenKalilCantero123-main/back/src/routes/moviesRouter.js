const { Router } = require("express");
const { moviesController, createdMovieController } = require("../controllers/moviesController");
const { bodyMovieValidation } = require("../middleware/moviesMiddleware");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", bodyMovieValidation, createdMovieController);

module.exports = {
    moviesRouter
};
