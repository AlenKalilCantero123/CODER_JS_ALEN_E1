
function bodyMovieValidation(req, res, next) {
    const requiredFields = ["title", "year", "director", "genre", "rate", "poster"];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Faltan los siguientes campos para crear una película: ${missingFields.join(", ")}`
        });
    } else {
       return  next();
    }
}

module.exports = {
    bodyMovieValidation
};












// // validationMiddleware.js

// function validateMovieData(req, res, next) {
//     const { title, year, director, genre, rate, poster } = req.body;
//     const requiredFields = ["title", "year", "director", "genre", "rate", "poster"];
//     const missingFields = requiredFields.filter(field => !req.body[field]);

//     if (missingFields.length > 0) {
//         return res.status(400).json({
//             message: `Faltan los siguientes campos para crear una película: ${missingFields.join(", ")}`
//         });
//     }

//     next();
// }

// module.exports = {
//     validateMovieData
// };


