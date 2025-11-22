//inputs
//conteo
const count = document.getElementById("count")
const plus = document.getElementById("plus")
//form
const fname = document.getElementById("name")
const lastn = document.getElementById("lastn")
const age = document.getElementById("age")
//notas
const bloc = document.getElementById("bloc")
//clear
const clear = document.getElementById("clear")

function read() {
    //alert("read start")
    //leer localStorage
    temp=JSON.parse(localStorage.getItem("storage"))
    //aplicar modificaciones
    count.textContent=temp.nume
    fname.value=temp.nomb
    lastn.value=temp.apel
    age.value=temp.edad
    bloc.value=temp.nota
    //alert("read done")
}
function edit() {
    //alert("edit start")
    if (count.value!=true){
        count.value=0
    }
    //contenedor
    var container={
        nume:count.value,
        nomb:fname.value,
        apel:lastn.value,
        edad:age.value,
        nota:bloc.value}
    //guardar contenedor
    localStorage.setItem("storage", JSON.stringify(container));
    //alert("edit done")
    read()
}
function add(){
    //alert(count.textContent)
    //alert("add start")
    //+
    count.value=parseInt(count.textContent)+1
    //alert("add done")
    edit()
}
function reset() {
    //alert("reset start")
    //limpiar almacen
    localStorage.removeItem("storage");
    //resetear pagina
    count.textContent=0
    fname.value=""
    lastn.value=""
    age.value=""
    bloc.value=""
    //alert("reset done")
}

//event listener
fname.addEventListener("keydown", key)
lastn.addEventListener("keydown", key)
age.addEventListener("keydown", key)
bloc.addEventListener("keydown", key)
//plus.addEventListener("click" , add())
//clear.addEventListener("click" . reset())
//enter
function key(event){
    if(event.key=="Enter"){
        //alert("enter detected")
        edit()
    }    
}
//default
read()