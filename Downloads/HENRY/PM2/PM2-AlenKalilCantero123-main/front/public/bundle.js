(()=>{"use strict";function e(e){const t=document.createElement("div"),a=document.createElement("h1"),r=document.createElement("button"),n=document.createElement("img");return n.src=e.poster,n.classList.add("cardImg"),n.alt=e.title,n.value=e.id,n.background=e.background,a.innerHTML=e.title,r.innerText="Ver ahora",t.classList.add("card"),t.appendChild(n),t.appendChild(a),t.appendChild(r),n.addEventListener("mouseenter",(e=>{const t=e.target.background;document.body.style.backgroundImage=`url(${t})`})),t}function t(t){const a=document.querySelector("#cardsContainer");a.innerHTML="",t.map(e).forEach((e=>a.appendChild(e)))}const a=[{title:"Guardians of the Galaxy Vol. 2",year:2017,director:"James Gunn",duration:"2h 16min",genre:["Action","Adventure","Comedy"],rate:7.7,poster:"https://image.tmdb.org/t/p/original/jnkRalVDP1UWLEDugamGWNNl6j.jpg",background:"https://wallpapercave.com/wp/wp1927574.jpg"},{title:"Star Wars: Episode IV - A New Hope",year:1977,director:"George Lucas",duration:"2h 1min",genre:["Action","Adventure","Fantasy","Sci-fi"],rate:8.7,poster:"https://picfiles.alphacoders.com/350/350096.jpg",background:"https://images5.alphacoders.com/455/thumb-1920-455697.jpg"},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001,director:"Peter Jackson",duration:"2h 58min",genre:["Action","Adventure","Drama","Fantasy"],rate:8.8,poster:"https://image.tmdb.org/t/p/original/b4XZizlvqQkZno8cT3VPBYTGudB.jpg",background:"https://wallpapercave.com/wp/wp6021426.jpg"}];$.get("https://students-api.up.railway.app/movies").done((function(e){e.forEach(((e,t)=>{switch(e.id=t+1,e.id){case 1:e.background="https://wallpapercave.com/wp/wp1927574.jpg";break;case 2:e.background="https://images5.alphacoders.com/455/thumb-1920-455697.jpg";break;case 3:e.background="https://wallpapercave.com/wp/wp6021426.jpg"}})),t(e)})).fail((function(){alert("La información no se cargó correctamente. Se utilizará información falsa."),t(a)}))})();