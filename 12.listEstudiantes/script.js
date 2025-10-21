nombre=document.getElementById("nombre")
apellido=document.getElementById("apellido")
nota=document.getElementById("nota")
edad=document.getElementById("edad")
est=document.getElementById("lista")
listaE=[]

function actualizar() {
    html=""
    listaE.forEach((estudiante) => {
        html+=`<div class="estudiante">
            <p>Nombre completo: ${estudiante.name} ${estudiante.lastname}</p>
            <p>Edad: ${estudiante.age}</p>
            <p>Nota Promedio ${estudiante.not}
        </div>`
    })
    est.innerHTML=html
}
function add(){
    if (nombre.value!="" && apellido.value!="" && nota.value!="" && edad.value!="" ){
        listaE.push({
            name:nombre.value,
            lastname:apellido.value,
            not:nota.value,
            age:edad.value
        })
        nombre.value="" 
        apellido.value=""
        nota.value="" 
        edad.value=""
    }
    actualizar()
}
nombre.addEventListener("keydown", key())
apellido.addEventListener("keydown", key())
nota.addEventListener("keydown", key())
edad.addEventListener("keydown", key())

function key(event){
    if(event.key=="Enter"){
        add()
    }    
}
