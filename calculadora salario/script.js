function calc() {
    ph=document.getElementById("ph").value
    hr=document.getElementById("hora").value
    tp=document.getElementById("tipoDePago").value

    if (ph>0 && hr>0){
        if(tp=="Quincenal"){
            r=2*ph*hr
        }else if(tp=="Semanal"){
            r=ph*hr
        }else {
            r=4*ph*hr
        }
        document.getElementById("res").innerHTML=`Tu pago ${tp} es ${r}`
    }else{
        document.getElementById("res").innerHTML=`input invalido`
    }
}