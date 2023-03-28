async function getAllEvents(){
   /*  fetch("../data/amazing.json")
        .then(response => response.json())
        .then(data => { 
            eventos = data.events;
            console.log(eventos);
            return eventos;
        }); */
    const response = await fetch("../data/amazing.json")
    const data = await response.json();  
    const eventos = data.events;
    return eventos;  
}

async function getPastEvents(){
    const response = await fetch("../data/amazing.json")
    const data = await response.json();  
    const eventos = data.events;
    const date = data.currentDate;
    let pastEvents = eventos.filter(evento => evento.date < date);
    return pastEvents;
}

async function getUpcomingEvents(){
    const response = await fetch("../data/amazing.json")
    const data = await response.json();  
    const eventos = data.events;
    const date = data.currentDate;
    let futureEvents = eventos.filter(evento => evento.date > date);
    return futureEvents;
}

export {getAllEvents,getPastEvents,getUpcomingEvents};