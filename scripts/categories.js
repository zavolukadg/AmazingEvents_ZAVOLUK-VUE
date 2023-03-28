let categoriasDeEventos = [];

function getCategories(allEvents){
    allEvents.forEach(evento =>{
        if(categoriasDeEventos.indexOf(evento.category) == -1){
            categoriasDeEventos.push(evento.category);
        }
    });
    createCategorysTemplate(categoriasDeEventos);
    ///Tambien se puede realizar pasando el arraycompleto a Set y volver a pasarlo a array
    ///El set obtiene 
}

function createCategorysTemplate(categories){
    const template = document.querySelector("#check-template").content;
    const categoriesContainer = document.querySelector("#checks-container");
    const fragment = document.createDocumentFragment();

    categoriesContainer.innerHTML = '';
    categories = categories.sort();
    categories.forEach(category => {
        template.querySelector("#cbx").value = category;
        template.querySelector("#lblcbx").textContent = category;
    
        const nodo = template.cloneNode(true);
        fragment.appendChild(nodo);
    });
    categoriesContainer.appendChild(fragment);
}

export {getCategories};