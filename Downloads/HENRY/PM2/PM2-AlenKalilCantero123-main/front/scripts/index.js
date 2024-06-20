import { transformResponse } from './controllerTransResponse.js';
import { failResponse } from './controllerFailResponse.js';
const axios = require("axios")

const cardsContainer = document.querySelector("#cardsContainer")

    async function getData(){
        try { 
const response = await axios.get("https://students-api.up.railway.app/movies")
transformResponse(response.data)
        } catch(error){
console.log(error)
failResponse()
        }
    }

getData()




