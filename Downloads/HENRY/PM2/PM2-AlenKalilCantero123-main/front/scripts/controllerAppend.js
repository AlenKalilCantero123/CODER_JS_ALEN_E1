// scripts/ControllerAppend.js
import { jsToHTML } from './controllerJsToHTML.js';

export function appendHTMLToDOM(info) {
    const cardsContainer = document.querySelector("#cardsContainer");
    cardsContainer.innerHTML = ''; // Limpiamos el contenedor antes de añadir nuevos elementos

    const arrayHtmlCards = info.map(jsToHTML);
    arrayHtmlCards.forEach((htmlCard) => cardsContainer.appendChild(htmlCard));
}






