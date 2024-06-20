// scripts/ControllerFailresponse.js
import { appendHTMLToDOM } from './controllerAppend.js';
import { tempData } from './tempData.js';

export function failResponse() {
    alert("La información no se cargó correctamente. Se utilizará información falsa.");
    appendHTMLToDOM(tempData);
}





