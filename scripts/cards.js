function createCards(eventos){
    const divTarjetas = document.getElementById('tarjetas');
    let tarjetas = '';

    if(eventos.length != 0){
        for(let evento of eventos){
            if(evento.name != "Batman"){
                tarjetas += 
                 `<div class="card">
                    <div id="headerCard" class="rounded-top">
                        <p id="category" class="card-text text-center">${evento.category}</p>
                    </div>
                    <img class="rounded-4 shadow cardimg" src="${evento.image}" alt="card1">
                    <div class="card-body mx-auto text-center">
                        <h2 class="">${evento.name}</h2>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="clearfix pb-3">
                        <p class="float-start mx-3">Price: $${evento.price}</p>
                        <a href="./details.html?id=${evento._id}" class="btn btncard float-end me-3">See More...</a>
                    </div>
                </div>`;
            }
            if(evento.name == "Batman"){
                tarjetas += 
                    `<div class="card">
                        <div id="headerCard" class="rounded-top">
                            <p id="category" class="card-text text-center">${evento.category}</p>
                        </div>
                        <img id="imgBatman" class="rounded-4 shadow cardimg" src="${evento.image}" alt="card1">
                        <div class="card-body mx-auto text-center">
                            <h2 class="">${evento.name}</h2>
                            <p class="card-text">${evento.description}</p>
                        </div>
                        <div class="clearfix pb-3">
                            <p class="float-start mx-3">Price: $${evento.price}</p>
                            <a href="./details.html?id=${evento._id}" class="btn btncard float-end me-3">See More...</a>
                        </div>
                        <audio id="heartbeat" src="../assets/sounds/Batman_Theme_Song.mp3" preload="auto">
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                    </div>`;
            }
        }
    }
    else{
        tarjetas = 
        `<h3>There are no cards to display that correspond to the filters.</h3>`
    }
    divTarjetas.innerHTML = tarjetas;
}

function createCardsTemplate(eventos){
    const template = document.querySelector("#card-template").content;
    const contenedorTarjetas = document.querySelector("#tarjetas-container");
    const fragment = document.createDocumentFragment();

    contenedorTarjetas.innerHTML = '';
    if(eventos.length != 0){
        eventos.forEach(evento => {
            template.getElementById("category").textContent = evento.category;
            template.querySelector("#image").src = evento.image;
            template.getElementById("title").textContent = evento.name;
            template.getElementById("description").textContent = evento.description;
            template.getElementById("price").textContent = "$" + evento.price;
            template.getElementById("url-detail").href = "./details.html?id="+ evento._id;
        
            const nodo = template.cloneNode(true);
            fragment.appendChild(nodo);
        });
        contenedorTarjetas.appendChild(fragment);
    }
    else{
        let sinTarjetas = 
        `<h3>There are no cards to display that correspond to the filters.</h3>` 
        contenedorTarjetas.innerHTML = sinTarjetas;
    }
}

export {createCards,createCardsTemplate};