const { getMoviesService } = require("../services/moviesServices");

function moviesController(req, res) {

  const movies = getMoviesService();

  res.status(200).json({
    message: "Movies Data",
    data: movies
    
  });
}

module.exports = { moviesController}












// const {getMoviesService} = require("../services/moviesServices")

// function moviesController (req, res){


// const movies = getMoviesService()


// res.status(200).json({
// message: "Movies Data",
// data: movies

// });
// }
// module.exports = {moviesController};

