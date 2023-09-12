
mostrarData()
let eventos = []
let currentDate = ""
let columna1 = []
let columna3 = []

function mostrarData(){
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data=>{
        currentDate = data.currentDate;
        eventos = data.events;
        console.log(eventos);
        generartablas()
    })
}

let datosTabla2 = []


function generartablas(){
    eventos.sort((a,b) => calcularPorcentaje(b) - calcularPorcentaje(a))
    for (let i = 0; i<eventos.length; i++){
        columna1.push(eventos[i].name)
    }
    eventos.sort((a,b) => b.capacity - a.capacity)
    for (let i = 0; i<eventos.length; i++){
        columna3.push(eventos[i].name)
    }
    for (let i = 0; i<3; i++){
        rellenarTabla("body1", columna1[i], columna1[columna1.length-(1+i)], columna3[i])
    }
    let categorias = [];
for (let i = 0; i<eventos.length; i++){
if(!categorias.includes(eventos[i].category)){
    categorias.push(eventos[i].category)
}
}
console.log(categorias)
categorias.forEach(categoria =>{
    rellenarTabla("body2", categoria, calcularIngresos(categoria, false), calcularPorcentajeporCategoria(categoria,false))
    rellenarTabla("body3", categoria, calcularIngresos(categoria, true), calcularPorcentajeporCategoria(categoria,true))
})
}

    function rellenarTabla(tabla, columna1, columna2, columna3){
        let body = document.getElementById(tabla)
        let datos = document.createElement("tr")
        datos.innerHTML = `<td>${columna1}</td>
        <td>${columna2}</td>
        <td>${columna3}</td>`
        body.appendChild(datos);
    }

    function calcularIngresos(categoria,validacion){
        let ingresos = 0
        for (let i = 0; i<eventos.length; i++){
            let condicion = (validacion)?eventos[i].date<currentDate:eventos[i].date>=currentDate
            if(eventos[i].category == categoria && condicion){
            if(eventos[i].assistance == undefined) ingresos += eventos[i].price * eventos[i].estimate;
                else ingresos += eventos[i].price * eventos[i].assistance;}
            }
            return  (ingresos != 0) ? ingresos : "No hay eventos";
    }

    function calcularPorcentajeporCategoria(categoria,validacion){
        let asistencia = 0
        let capacidad = 0
        for (let i = 0; i<eventos.length; i++){
            let condicion = (validacion)?eventos[i].date<currentDate:eventos[i].date>=currentDate
            if(eventos[i].category == categoria && condicion){
            capacidad+= eventos[i].capacity
            if(eventos[i].assistance == undefined) asistencia += eventos[i].estimate;
                else asistencia += eventos[i].assistance;}
            }
            return (capacidad != 0) ? (asistencia * 100 / capacidad).toFixed(2).concat("%"): "No hay eventos";
    }

        function calcularPorcentaje(evento){
            if(evento.assistance == undefined) return (evento.estimate * 100) / evento.capacity;
            else return (evento.assistance * 100) / evento.capacity;
        }



