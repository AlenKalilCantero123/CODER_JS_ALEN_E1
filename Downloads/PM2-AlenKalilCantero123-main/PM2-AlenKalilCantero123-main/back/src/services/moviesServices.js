
const moviesData = [
  {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster: "https://image.tmdb.org/t/p/original/jnkRalVDP1UWLEDugamGWNNl6j.jpg",
      background: "https://wallpapercave.com/wp/wp1927574.jpg"
  },
  {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-fi"],
      rate: 8.7,
      poster: "https://picfiles.alphacoders.com/350/350096.jpg",
      background: "https://images5.alphacoders.com/455/thumb-1920-455697.jpg"
  },
  {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster: "https://image.tmdb.org/t/p/original/b4XZizlvqQkZno8cT3VPBYTGudB.jpg",
      background: "https://wallpapercave.com/wp/wp6021426.jpg"
  }
];


function getMoviesService() {
  
  return moviesData;
}

module.exports = {
  getMoviesService
};







// // scripts/tempData.js
// export const tempData = [
//     {
//         title: "Guardians of the Galaxy Vol. 2",
//         year: 2017,
//         director: "James Gunn",
//         duration: "2h 16min",
//         genre: ["Action", "Adventure", "Comedy"],
//         rate: 7.7,
//         poster: "https://image.tmdb.org/t/p/original/jnkRalVDP1UWLEDugamGWNNl6j.jpg",
//         background: "https://wallpapercave.com/wp/wp1927574.jpg"
//     },
//     {
//         title: "Star Wars: Episode IV - A New Hope",
//         year: 1977,
//         director: "George Lucas",
//         duration: "2h 1min",
//         genre: ["Action", "Adventure", "Fantasy", "Sci-fi"],
//         rate: 8.7,
//         poster: "https://picfiles.alphacoders.com/350/350096.jpg",
//         background: "https://images5.alphacoders.com/455/thumb-1920-455697.jpg"
//     },
//     {
//         title: "The Lord of the Rings: The Fellowship of the Ring",
//         year: 2001,
//         director: "Peter Jackson",
//         duration: "2h 58min",
//         genre: ["Action", "Adventure", "Drama", "Fantasy"],
//         rate: 8.8,
//         poster: "https://image.tmdb.org/t/p/original/b4XZizlvqQkZno8cT3VPBYTGudB.jpg",
//         background: "https://wallpapercave.com/wp/wp6021426.jpg"
//     }
// ];


// function getMoviesService(){
//     return moviesData
// }
// module.exports = {
//     getMoviesService
// }