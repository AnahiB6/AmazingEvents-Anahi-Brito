let eventos = [];
let data = [];
let categorias = [];

let filtro = "";
let seleccionados = [];

const contenedorCartas = document.getElementById('cartas')
const contenedorCheckboxes = document.getElementById('ckbox')
const inputButton = document.getElementById('inputbuscador');

init();

function init() {
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i<data.events.length; i++) {
            if(!categorias.includes(data.events[i].category)) {
                categorias.push(data.events[i].category);
            }
        }
        console.log(categorias);
        createAllCheckboxes(categorias, contenedorCheckboxes);

        data.events.forEach((event) => {
            if(event.date > "2023-03-10") {
                eventos.push(event);
            }
        });
        console.log(eventos);
        createAllCards(eventos, contenedorCartas);
    });
}

    function createAllCards(array, contenedor) {
        let html = '';
        if(array.length > 0) {
            array.forEach(evento => html += createCard(evento));
        } else {
            html += `<div class="text-center mt-5 h5">No se encontraron eventos.</div>`;
        }
        contenedor.innerHTML = html;
    }

function createCard(evento){
    return `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
    <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <div class="priceydat">
            <p>${evento.price}</p>
            <a href="./details.html?id=${evento._id}" style="background-color: #f53896; border-color: black;" class="btn btn-primary">Details</a>
        </div>
    </div>
    </div>`;
}

function createAllCheckboxes(array, contenedor) {
    let html = '';
    array.forEach(categoria => html += createCheckbox(categoria));
    contenedor.innerHTML = html;
}

function createCheckbox(categoria) {
    let checked = "";
    let clases = "";
    return `<label class="categoria ck${clases}">
    <input class="ckinput" type="checkbox" name="${categoria}" value="${categoria}"  id="${categoria}"${checked}> 
    <span>${categoria}</span>
    </label>`;
}

document.addEventListener('input', e => {
    if(e.target.className == "ckinput") {
        if(e.target.checked) {
            seleccionados.push(e.target.value);
        }
        else {
            seleccionados.pop(e.target.value);
        }
        filterCards();
    }
    console.log(seleccionados);
});

inputButton.addEventListener('input', e => {
    const textoIngresado = e.target.value.toLowerCase();
    const coincidencia = eventos.filter(event => event.name.toLowerCase().includes(textoIngresado));
    console.log(coincidencia);
    filtro = textoIngresado;
    filterCards();
});
