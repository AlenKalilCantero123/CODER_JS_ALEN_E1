


const {Router} = require ("express");
const { moviesController } = require("../controllers/moviesController")

const moviesRouter = Router();

moviesRouter.get("/", moviesController)
    


    module.exports = {
        moviesRouter
    }

































// const { Router } = require("express");
// const { moviesController } = require("../controllers/moviesController");
// // const movieValidate = require
// const moviesRouter = Router();

// moviesRouter.get("/", moviesController.get);
//  moviesRouter.post("/", createdMoviesController);


// module.exports = {
//   moviesRouter
// };



