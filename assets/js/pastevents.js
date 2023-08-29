let cartas = document.getElementById ('cartas');
let cards = "";
for(let event of eventos) {
    if (event.date < "2023-01-01"){        let card =`<div class="card" style="width: 18rem;">
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



