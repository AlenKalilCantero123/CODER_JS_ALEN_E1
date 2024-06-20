

const { Router } = require("express");
const { moviesRouter } = require("./moviesRouter");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("todo ok en /")
})

router.use("/movies", moviesRouter);

module.exports = {
    router
}












// // movies.js

// const express = require('express');
// const router = express.Router();
// const { createMovieController } = require('../controllers/moviesController');

// // Ruta: POST /movies
// router.post('/', createMovieController);

// module.exports = router;







