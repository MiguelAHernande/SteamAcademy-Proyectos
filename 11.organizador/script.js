nombre=document.getElementById("nombre")
tareas=document.getElementById("tareas")
listaT=[]

function actualizar() {
    html=""
    listaT.forEach((valor,indice) => {
        html=html+`<div class="objeto">
            <p>${valor}</p>
            <div>
                <span class="ind">${indice+1}</span>
                <span>
                    <button class="borrar" onClick={listaT.splice(${indice},1),actualizar()}>Eliminar</button>
                </span>
            </div>
        </div>`
    })
    tareas.innerHTML=html
}
function add(){
    if (nombre.value!=""){
        listaT.push(nombre.value)
        nombre.value=""
    }
    actualizar()
}
nombre.addEventListener("keydown", (event)=>{
    if(event.key=="Enter"){ 
        add()
    }    
})