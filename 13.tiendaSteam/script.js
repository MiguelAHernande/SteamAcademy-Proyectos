agregarP=document.getElementById("agregarP")
agregarE=document.getElementById("agregarE")
agregarC=document.getElementById("agregarC")
canasta=document.getElementById("list")
tot=document.getElementById("res")
carrito=[
    {name:"Pizza", price:2000, count:0},
    {name:"Empanada", price:4000, count:0},
    {name:"Coca-cola", price:4000, count:0}
]

function actualizar() {
    total=0
    html=""
    carrito.forEach((objeto,indice) => {
        if (objeto.count>0){
            total=total+(objeto.price*objeto.count)
            html+=`<div class="box">
            <p>${objeto.count} ${objeto.name}</p>
            <p>${objeto.price}</p>
            <button class="borrar" onClick="subtract(${indice})">
            <img src="imagenes/trash.png"></button>
            </div>`
        }else if(objeto.count<0){objeto.count=0}
    })
    tot.innerHTML=`Total: ${total}`
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


