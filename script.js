agregarP=document.getElementById("agregarP")
agregarE=document.getElementById("agregarE")
agregarC=document.getElementById("agregarC")
canasta=document.getElementById("canasta")
carrito=[
    {name:"Pizza", price:2000, count:0},
    {name:"Empanada", price:4000, count:0},
    {name:"Coca-cola", price:4000, count:0}
]

function actualizar() {
    total=0
    html="<h2>Carrito</h2>"
    carrito.forEach((objeto,indice) => {
        if (objeto.count>0){
            total=total+(objeto.price*objeto.count)
            html+=`<div class="estudiante">
            <p>${objeto.count} ${objeto.name}</p>
            <p>${objeto.price}</p>
            <button class="borrar" onClick="subtract(${indice})">
            Eliminar</button>
            </div>`
        }else if(objeto.count<0){objeto.count=0}
    })
    html+=`<p id="res">Total: ${total}</p>`
    canasta.innerHTML=html
}
function add(indice){
    carrito[indice].count=carrito[indice].count+1
    actualizar()
}

function subtract(indice){
    carrito[indice].count=carrito[indice].count-1
    actualizar()
}


