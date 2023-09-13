const contenedorCartas = document.getElementById('krtasdet');

const quearySearch = document.location.search;
const id = new URLSearchParams(quearySearch).get("id");

traerData();

function traerData() {
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
      const event = data.events.find(event => event._id === parseInt(id));
      console.log(event);
      const card = createCard(event, contenedorCartas);
    });
}

function createCard(evento, contenedorCartas) {
    const { image, _id, name, date, description, category, place, capacity, assistance, price, estimate } = evento;

    let estimateHtml = '';

    if(estimate) {
      estimateHtml = `<p id="asistencia" class="card-text">Estimate: ${estimate}</p>`;
    } else {
      estimateHtml = `<p id="asistencia" class="card-text">Assistance: ${assistance}</p>`;
    }
    console.log(estimateHtml);

    contenedorCartas.innerHTML = `<div class="card d mb-3">
      <div class="row g-0">
        <div class="col-md-4"  id="detalles">
            <img src="${image}" class="img-fluid rounded-start w-100" alt="dinosaurio">
        </div>
      <div class="col-md-8">
        <div class="card-body">
            <h5 id="detalle" class="card-title"><strong>${name}</strong></h5>
            <p id="fecha" class="card-text">Date: ${date}</p>
            <p id="descripcion" class="card-text">Description: ${description}</p>
            <p id="categoria" class="card-text">Category: ${category}</p>
            <p id="lugar" class="card-text">Place: ${place}</p>
            <p id="capacidad" class="card-text">Capacity: ${capacity}</p>
            ${estimateHtml}
            <p id="precio" class="card-text">Price: ${price}</p>
        </div>
      </div>
    </div> `;
};
