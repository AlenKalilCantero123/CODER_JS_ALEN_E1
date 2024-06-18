const { appendHTMLToDOM } = require('./ControllerAppend.js');

function transformResponse(response) {
    response.forEach((movie, index) => {
        movie.id = index + 1;
        switch (movie.id) {
            case 1:
                movie.background = "https://wallpapercave.com/wp/wp1927574.jpg";
                break;
            case 2:
                movie.background = "https://images5.alphacoders.com/455/thumb-1920-455697.jpg";
                break;
            case 3:
                movie.background = "https://wallpapercave.com/wp/wp6021426.jpg";
                break;
            default:
                break;
        }
    });

    appendHTMLToDOM(response);
}

module.exports = {
    transformResponse
};
