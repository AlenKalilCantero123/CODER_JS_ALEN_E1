require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

async function dbConnect() {mongoose.connect ("mongodb+srv://alenkcantero:1e73eF9yyV9u30Ia@clusterdealen.dmbqxrf.mongodb.net/HenryM2?retryWrites=true&w=majority&appName=ClusterDeAlen")
    // try {
    //     await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`, {
    //          });
    //     console.log("Database connected successfully");
    // } catch (error) {
    //     console.error("Database connection error:", error);
    // }
}

module.exports = {
    dbConnect
};









// require("dotenv").config();

// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);

// async function dbConnect() {
//     try {
//         await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             ssl: false,
//             sslValidate: false,
//         });
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("Database connection error:", error);
//     }
// }

// module.exports = {
//     dbConnect
// };








// // require("dotenv").config()

// // const mongoose = require("mongoose");
// // mongoose.set('strictQuery', false);
// // async function dbConnect() {
// //     try {
// //         await mongoose.connect('mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.dmbqxrf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}', {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //             ssl: false,
// //             sslValidate: false,
// //         });
// //         console.log("Database connected successfully");
// //     } catch (error) {
// //         console.error("Database connection error:", error);
// //     }
// // }

// // module.exports = {
// //     dbConnect
// // }
