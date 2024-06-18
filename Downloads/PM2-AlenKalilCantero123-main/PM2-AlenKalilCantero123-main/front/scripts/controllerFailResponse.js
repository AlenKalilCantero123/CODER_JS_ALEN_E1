const { appendHTMLToDOM } = require('./ControllerAppend.js');
const { tempData } = require('./tempData.js');

function failResponse() {
    alert("La información no se cargó correctamente. Se utilizará información falsa.");
    appendHTMLToDOM(tempData);
}

module.exports = {
    failResponse
};
