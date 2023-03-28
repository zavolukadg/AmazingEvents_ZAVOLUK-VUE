function doubleSearch(eventos){
    let firstFilter = buttonFilter(eventos);
    let secondFilter = checksFilter(firstFilter);
    return secondFilter;
}

function buttonFilter(eventos){
    let keywordToSearch = document.getElementById('textSearch').value;
    let eventosFiltrados = eventos.filter(evento => 
        evento.name.toLowerCase().includes(keywordToSearch.toLowerCase()));
    return eventosFiltrados;
}

function checksFilter(eventos){
    //obtenemos todos los checkboxes del contenedor 
    let categories = Array.from(document.querySelectorAll("input[type='checkbox']")); 
    //filtramos para obtener solo los que se encuentran seleccionados
    let catSeleccionadas = categories.filter(categoria => categoria.checked);
    //Mapeamos para obtener el value de los checkboxes que estan chequeados
    let valuesChequeados = catSeleccionadas.map(categoria => categoria.value);
    //filtramos los eventos de acuerdo a los values chequeados
    let eventosFiltrados = eventos.filter(evento => valuesChequeados.includes(evento.category));
    if (valuesChequeados.length == 0){
        eventosFiltrados = eventos;
    }
    return eventosFiltrados;
}

export {doubleSearch,buttonFilter,checksFilter};