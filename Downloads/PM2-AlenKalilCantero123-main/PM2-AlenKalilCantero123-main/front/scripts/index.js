const axios = require("axios");
const { transformResponse } = require('./ControllerTransResponse.js');
const { failResponse } = require('./ControllerFailResponse.js');

async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        transformResponse(response.data.data);
    } catch (error) {
        console.error(error);
        failResponse();
    }
}

getData();
