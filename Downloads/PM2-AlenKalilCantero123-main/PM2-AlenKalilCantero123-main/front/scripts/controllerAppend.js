const { jsToHTML } = require('./ControllerJsToHTML.js');

function appendHTMLToDOM(info) {
    const cardsContainer = document.querySelector("#cardsContainer");
    cardsContainer.innerHTML = ''; // Limpiamos el contenedor antes de añadir nuevos elementos

    if (Array.isArray(info)) {
        const arrayHtmlCards = info.map(jsToHTML);
        arrayHtmlCards.forEach((htmlCard) => cardsContainer.appendChild(htmlCard));
    } else {
        console.error('Error: Data is not an array');
    }
}

module.exports = {
    appendHTMLToDOM
};
