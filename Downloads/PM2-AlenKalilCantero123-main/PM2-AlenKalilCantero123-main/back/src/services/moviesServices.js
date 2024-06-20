

const { Movie } = require("../models/Movies");

async function getMoviesService() {
    try {
        return await Movie.find();
    } catch (error) {
        throw error;
    }
}

async function createdMovieService(movieObject){
try {
    const movie = new Movie(movieObject)
    return await movie.save()

}catch (error){
    throw error

}

}

module.exports = {
    getMoviesService, 
    createdMovieService
};











