const { app } = require("./server");
const { dbConnect } = require("./src/config/dbConfig");

const PORT = 3000;

dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});

















// const {app} = require("./server")
// const { dbConnect} =require ("./src/config/dbConfig")


// const PORT = 3000;

// dbConnect()
// .then(()=>{
// app.listen(PORT, ()=>{
// console.log(`Server listening on port ${PORT}`)
// })
// })
// .catch((err)=>{
// console.error(err)
// })

//1e73eF9yyV9u30Ia clave mongo