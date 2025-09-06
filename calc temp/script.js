function tt() {
    temp=document.getElementById("temp")
    res=document.getElementById("res")
    if (temp.value>45){
        document.body.className="supercaliente"
        res.innerHTML=`Muy Caliente (${temp.value})`    
    }else if(temp.value>38 && temp.value<45){
        document.body.className="caliente"
        res.innerHTML=`Caliente (${temp.value})`
    }else if(temp.value>30 && temp.value<38){
        document.body.className="templado"
        res.innerHTML=`templado (${temp.value})`
    }else if (temp.value>20 && temp.value<30){
        document.body.className="frio"
        res.innerHTML=`frio (${temp.value})`
    }else if(temp.value<20){
        document.body.className="superfrio"
        res.innerHTML=`Muy frio (${temp.value})`
    }
}

document.getElementById("temp").addEventListener("click", tt())