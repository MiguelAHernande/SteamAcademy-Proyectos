function Helado() {
    

    if (sabor.value=="Chocolate"){
        t=cant.value*800
    }else if(sabor.value=="Vainilla"){
        t=cant.value*700
    }else if(sabor.value=="Menta"){
        t=cant.value*1300
    }else if(sabor.value=="Arequipe"){
        t=cant.value*900
    }
    
    document.getElementById("imagen").src=`img/${sabor.value}.png`
    document.getElementById("total").innerHTML=`Total: ${t}`
    document.getElementById("sabr").innerHTML=`Sabor: ${sabor.value}`
    cantr=document.getElementById("cantr").innerHTML=`Cantidad: ${cant.value}`
}

function comp(){
    alert("Compra realizada con exito")
}

sabor=document.getElementById("sabor")
cant=document.getElementById("cant")
sabor.addEventListener("input",Helado)
cant.addEventListener("input",Helado)