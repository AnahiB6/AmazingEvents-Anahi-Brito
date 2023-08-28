let cartas = document.getElementById ('cartas');
let cards = "";
for(let i=0; i<eventos.length; ++i) {
    if(i<4) {    let event = eventos[i];
        let card =`<div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="priceydat">
                <p>${event.price}</p>
                <a href="./details.html" style="background-color: #f53896; border-color: black;" class="btn btn-primary">Details</a>
            </div>
        </div>
        </div>`;
        cards += card;
    };
}
cartas.innerHTML = cards;

