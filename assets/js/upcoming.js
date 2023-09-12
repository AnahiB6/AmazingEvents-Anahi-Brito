
let cartas = document.getElementById ('cartas');
let filtro = ""
let categorias = []
// 23-03-10
function krtas () {
let cards = "";
for(let i=0; i<eventos.length; ++i) {
    let event = eventos[i];
    if(event.date > "2023-01-01") {    
        if(filtro !== "") {
            if(!event.name.toLowerCase().includes(filtro)) {
                continue;
            }
        }
        if(categorias.length > 0) {
            if(!categorias.includes(event.category)) {
                continue;
            }
        }
        let card =`<div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="priceydat">
                <p>${event.price}</p>
                <a href="./details.html?id=${event._id}" style="background-color: #f53896; border-color: black;" class="btn btn-primary">Details</a>
            </div>
        </div>
        </div>`;
        cards += card;
    };
}
cartas.innerHTML = cards;
}

krtas()





//Buscador
const inputbtn = document.getElementById('inputbuscador');


document.addEventListener('input', e => {
    if(e.target.className == "ckinput"){
        if(e.target.checked)categorias.push(e.target.value)
        else categorias.pop(e.target.value)
    krtas()
    }
console.log(categorias);
})

inputbtn.addEventListener('input', function(){
    const textoIngresado = inputbtn.value.toLowerCase();
        const coincidencia = eventos.filter(event => event.name.toLowerCase().includes(textoIngresado));
        console.log(coincidencia);
filtro = textoIngresado
krtas()
});




//forma2- checkboxs

let contenedor = document.getElementById('ckbox');


function existe (array, data) {
    var result = false;
    for(let i=0; i<array.length; ++i) {
        if(array[i] === data) {
            result = true;
        }
    }
    return result;
}

function mostrarCartas(array, contenedor){
    var tmp = []
    array.forEach((item) => {
        if(!existe(tmp, item.category)) {
            tmp.push(item.category);
        }
    });
    console.log(tmp);
    console.log(array);

    let html=""
    tmp.forEach(event => {
        let checked = "";
        let clases = "";
        html += `<label class="categoria ck${clases}">
        <input class="ckinput" type="checkbox" name="${event}" value="${event}"  id="${event}"${checked}> 
        <span>${event}</span>
    </label>`;
    });
    contenedor.innerHTML = html;
}

mostrarCartas(eventos, contenedor);

