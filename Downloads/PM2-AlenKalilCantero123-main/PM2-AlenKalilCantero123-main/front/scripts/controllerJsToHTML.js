function jsToHTML(ele) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    const img = document.createElement("img");

    img.src = ele.poster;
    img.classList.add("cardImg");
    img.alt = ele.title;
    img.value = ele.id;
    img.background = ele.background;
    h1.innerHTML = ele.title;
    button.innerText = "Ver ahora";
    div.classList.add("card");

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(button);

    img.addEventListener("mouseenter", (imageSelect) => {
        const background = imageSelect.target.background;
        document.body.style.backgroundImage = `url(${background})`;
    });

    return div;
}

module.exports = {
    jsToHTML
};
