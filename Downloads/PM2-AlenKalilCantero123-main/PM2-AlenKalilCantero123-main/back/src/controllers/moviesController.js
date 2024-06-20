const { getMoviesService, createdMovieService } = require("../services/moviesServices");

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
    
  try {
     const response = await createdMovieService(req.body);
    res.status(200).json({
      message: "Movie added successfully",
      data: response


      
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: "Error on creating movie",
      data: error
    })
  }}



module.exports = { 
  
  
  moviesController,
createdMovieController

 }

