

const { getMoviesService } = require("../services/moviesServices");

async function moviesController(req, res) {
  try {
    const movies = await getMoviesService();
    res.status(200).json({
      message: "Movies Data",
      data: movies

    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: "Error en la aplicacion",
      data: error
    })
  }}
async function createdMovieController(req,res){

}
module.exports = { 
  
  
  moviesController,
createdMovieController

 }










// const movieServices = require("../services/moviesServices");

// module.exports = {
//     getMovies: async (req, res) => {
//         try {
//             const movies = await movieServices.getMoviesService();
//             res.status(200).json(movies);
//         } catch (error) {
//             console.error("Error al obtener las películas:", error);
//             res.status(500).json({
//                 error: "No se pudieron obtener las películas"
//             });
//         }
//     },

    // createMovie: async (req, res) => {
    //     try {
    //         const { title, director, genre, year, rating, poster } = req.body;
    //         const newMovie = await movieServices.createMovie({ title, director, genre, year, rating, poster });
    //         res.status(201).json(newMovie);
    //     } catch (error) {
    //         console.error("Error al crear la película:", error);
    //         res.status(500).json({
    //             error: "No se pudo crear la película"
    //         });
    //     }
    // }
  










// const {getMoviesService} = require("../services/moviesServices")

// function moviesController (req, res){


// const movies = getMoviesService()


// res.status(200).json({
// message: "Movies Data",
// data: movies

// });
// }
// module.exports = {moviesController};

