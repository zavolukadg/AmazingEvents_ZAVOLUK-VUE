import {getAllEvents,getUpcomingEvents} from "./functions.js";
import {createCardsTemplate} from "./cards.js";
import {getCategories} from "./categories.js";
import {doubleSearch,checksFilter} from "./searchFunctions.js";

let upcomingEvents = await getUpcomingEvents();
let allEvents = await getAllEvents(); 
createCardsTemplate(upcomingEvents);
getCategories(allEvents);

const btnBuscador = document.getElementById("btnBuscador");
const search = document.querySelector('#textSearch');
const checksContainer = document.getElementById("checks-container");

btnBuscador.onclick = () =>{
    let eventosFIltrado = doubleSearch(upcomingEvents);
    createCardsTemplate(eventosFIltrado);
}

checksContainer.addEventListener('change', (event) => {
    let eventosFIltrado = doubleSearch(upcomingEvents);
    createCardsTemplate(eventosFIltrado);
});

search.addEventListener('keyup', () => {
    if(search.value == null || search.value == undefined || search.value == ""){
        let eventosFiltrados = checksFilter(upcomingEvents);
        createCardsTemplate(eventosFiltrados);    
    }
});


