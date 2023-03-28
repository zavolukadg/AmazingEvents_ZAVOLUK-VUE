import { getAllEvents } from "./functions.js";

const allEvents = await getAllEvents();

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

let eventoSeleccionado = allEvents.find(evento => evento._id == id);
const tarjetaDetalle = document.getElementById("tarjetas-detail");

//Se utiliza para modificar el formato de la fecha a DD/MM/AAAA
let fechaAuxiliar = new Date(eventoSeleccionado.date);
fechaAuxiliar.setDate(fechaAuxiliar.getDate() + 1);
let fechaEvento = fechaAuxiliar.toLocaleDateString();

let tarjeta = 
    `<div class="col">
        <img class="rounded-4 shadow" src="${eventoSeleccionado.image}" alt="cardImage">
    </div>
    <div class="col">
        <div class="row p-2">
            <div class="col"><b>Name: </b>${eventoSeleccionado.name}</div>
        </div>
        <div class="row p-2">
            <div class="col"><b>Date: </b>${fechaEvento}</div>
        </div>
        <div class="row p-2">
            <div class="col"><b>Description: </b>${eventoSeleccionado.description}</div>
        </div>
        <div class="row p-2 d-flex">
            <div class="col"><b>Category: </b>${eventoSeleccionado.category}</div>
        </div>
        <div class="row p-2">
            <div class="col"><b>Place: </b>${eventoSeleccionado.place}</div>
        </div>
        <div class="row p-2">
            <div class="col"><b>Capacity: </b>${eventoSeleccionado.capacity} Persons</div>
        </div>
        <div class="row p-2">
            <div class="col"><b>Price: </b>$${eventoSeleccionado.price}</div>
        </div>
    </div>`

tarjetaDetalle.innerHTML = tarjeta;