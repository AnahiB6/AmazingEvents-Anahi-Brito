// const searchParams = new URLSearchParams(window.location.search);
// const id = searchParams.get("id");

// for(let i=0; i<eventos.length; ++i) {
//     if(eventos[i]._id == id) {
//         const title = document.getElementById("detalle");
//         title.innerHTML = eventos[i].name

//         const text2 = document.getElementById("nombre");
//         text2.innerHTML = eventos[i].date

//         const title3 = document.getElementById("fecha");
//         title3.innerHTML = eventos[i].date

//         const title9 = document.getElementById("descripcion");
//         title9.innerHTML = eventos[i].description

//         const title4 = document.getElementById("categoria");
//         title4.innerHTML = eventos[i].category

//         const title5 = document.getElementById("lugar");
//         title5.innerHTML = eventos[i].place

//         const title6 = document.getElementById("capacidad");
//         title6.innerHTML = eventos[i].capacity

//         const title7 = document.getElementById("asistencia");
//         title7.innerHTML = eventos[i].assistance
        
//         const title8 = document.getElementById("precio");
//         title8.innerHTML = eventos[i].price
//     }
// }

const contenedorCartas = document.getElementById('krtasdet');
const cartasDetalles = eventos.filter(cart => cart)


const mostrasCartasDeta = cartasDetalles.map(cart => {
    let info = {};
    info.id = cart._id;
    info.name = cart.name;
    info.image = cart.image;
    info.date = cart.date;
    info.description = cart.description;
    info.category = cart.category;
    info.place = cart.place;
    info.capacity = cart.capacity;
    info.assistance = cart.assistance;
    info.price = cart.price;

    return info;
})

console.log(mostrasCartasDeta);


const quearySearch = document.location.search;
const id = new URLSearchParams(quearySearch).get("id");
console.log(id);


function crearCarta(cart, contenedorCartas) {
    const {_id, name, image, date, description, category, place, capacity, assistance, price } = cart;

    contenedorCartas.innerHTML = ` <div class="card-body">
    <h5 id="detalle" class="card-title"><strong>${_id}</strong></h5>
    <p id="nombre" class="card-text">${name}</p>
    <p id="fecha" class="card-text">${image}</p>
    <p id="descripcion" class="card-text">${date}</p>
    <p id="categoria" class="card-text">${description}</p>
    <p id="lugar" class="card-text">${place}</p>
    <p id="capacidad" class="card-text">${capacity}</p>
    <p id="asistencia" class="card-text">${assistance}</p>
    <p id="precio" class="card-text">${price}</p>
    </div>`
}
