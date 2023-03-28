import {getAllEvents, getPastEvents, getUpcomingEvents} from "./functions.js";

let allEvents = await getAllEvents(); 
let upcomingEvents = await getUpcomingEvents();
let pastEvents = await getPastEvents();
let hpEvent;
let lpEvent;
let lcEvent;

function getDataEvent(eventos){
    let orderEvents = eventos.sort((a,b) => getAttendancePercentage(a) - getAttendancePercentage(b));
    hpEvent = orderEvents[orderEvents.length - 1];
    lpEvent = orderEvents[0];
    lcEvent = eventos.sort((a,b) => b.capacity - a.capacity)[0];
}

function getAttendancePercentage(evento){
    return evento.assistance ? (evento.assistance * 100 / evento.capacity) : (evento.estimate * 100 / evento.capacity);
}

getDataEvent(allEvents);

const statisticTable = document.getElementById('statistic-table');
const upcomingTable = document.getElementById('upcoming-table');
const pastTable = document.getElementById('past-table');

createTableEventStatistics(allEvents);

function createTableEventStatistics(eventos){
    let table = ``;
    if(eventos.length != 0){
        table += 
                `<tr>
                    <th scope="row">1</th>
                    <td>${hpEvent.name} - ${getAttendancePercentage(hpEvent)}% - id ${hpEvent._id}</td>
                    <td>${lpEvent.name} - ${getAttendancePercentage(lpEvent)}% - id ${lpEvent._id}</td>
                    <td>${lcEvent.name} - Capacity: ${lcEvent.capacity} </td>
                </tr>
                `;
    }
    statisticTable.innerHTML += table;
}

createTableEvents(upcomingEvents,"upcoming",upcomingTable);
createTableEvents(pastEvents,"past",pastTable);


//Esta funcion llena los datos de las 2 tablas upcoming y past
function createTableEvents(eventos,type,htmlTable){
    let setCategories = new Set(eventos.map(evento => evento.category));
    let arrayCategories = [];
    setCategories.forEach(category => {
        let totalCapacity = 0;
        let totalAssistance = 0;
        let objCategory = {};
        objCategory.ravenues = 0;
        eventos.forEach(evento => {
            if (evento.category == category){
                /* if(evento.estimate){
                    console.log("Categoria: " + evento.category + "- Precio: " + evento.price + " Capacidad: " + evento.capacity + " Asistencia: " + evento.estimate);
                } */
                objCategory.name = category;
                totalCapacity += evento.capacity;
                if(type == "upcoming"){
                    totalAssistance += evento.estimate;
                    objCategory.ravenues += parseFloat(evento.price) * parseFloat(evento.estimate);
                }
                else{
                    totalAssistance += evento.assistance;
                    objCategory.ravenues += parseFloat(evento.price) * parseFloat(evento.assistance);
                }
            }
        })
        objCategory.asistencia = (totalAssistance*100)/totalCapacity;
        arrayCategories.push(objCategory);
    });

    let table = ``;
    if(arrayCategories.length != 0){
        for (let i = 0; i < arrayCategories.length; i++) {
            table += 
                    `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${arrayCategories[i].name} </td>
                        <td align="right" class="column">$${arrayCategories[i].ravenues}</td>
                        <td align="right" class="column">${(arrayCategories[i].asistencia).toFixed(2)}%</td>
                    </tr>
                    `;
        }
    }
    htmlTable.innerHTML += table;
}
