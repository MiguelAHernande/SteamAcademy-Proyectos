//ingreso
Re=[]
for (i=0;i<4;i++){
    t=parseInt(prompt("ingresa numero: "))
    if(Number.isInteger(t)){Re.push(t)
    }else{console.log("no es un numero")
    i--}
}

//comparar
Ma=false
for (c of Re) {
    if (Ma==false){
        Ma=c
        Me=c
        CM=1
        Cm=1
    }else{ 
        if(c==Ma){
            CM++}
        if(c==Me){
            Cm++}
        if(c>Ma){
            Ma=c
            CM=1}
        if(c<Me){
            Me=c
            Cm=1}
    }
}

//solucion
// mayor 
if (CM==1){
    console.log(`el mayor numero es ${Ma} y no se repite`)
}else {
    console.log(`el mayor numero es ${Ma} y se repite ${CM} veces`)
}

//menor
if (Cm==1){
    console.log(`el menor numero es ${Me} y no se repite`)
}else {
    console.log(`el menor numero es ${Me} y se repite ${Cm} veces`)
}