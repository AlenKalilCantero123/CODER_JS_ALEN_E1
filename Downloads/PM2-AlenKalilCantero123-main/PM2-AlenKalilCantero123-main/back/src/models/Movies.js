

const mongoose = require("mongoose");

const movieSchema =new mongoose.Schema ({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    year: {
        type: Number
    },
    director: { // Corrección en la clave "director"
        type: String
    },
    genre: {
        type: [String]
    },
    rate: {
        type: Number
    },
    poster: { // Añadido ":" después de la clave "poster"
        type: String
    }
});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}













// const mongoose = require("mongoose");

// const movieObject = {
//     title: {
//         type: String,
//         required: [true, 'El titulo es obligatorio']
//     },
//     year: {
//         type: Number
//     },
//     director: { // Corrección en la clave "director"
//         type: String
//     },
//     genre: {
//         type: [String]
//     },
//     rate: {
//         type: Number
//     },
//     poster: { // Añadido ":" después de la clave "poster"
//         type: String
//     }
// };

// const movieSchema = new mongoose.Schema(movieObject);

// const Movie = mongoose.model("Movie", movieSchema)

// module.exports = {
//     Movie
// }


