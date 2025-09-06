//nota
nota=prompt("ingresa nota del estudiante: ")
//asistencia
asis=prompt("ingresa el porcentaje de asistencia: ")
//proyecto final
pfin: while (true){
    t=prompt("agrega si entrego proyecyo final (Y/N): ")
    if (t=="Y" || t=="y"){
        Pfin=true
        break pfin
    }else if (t=="N" || t=="n"){
        pfin=false
        break pfin
    }else{
        console.log("respuesta invalida (Y/N)")
    }
}

//resultados    
//honorees >90% asistencia >95% p.final
if(nota>=90 && asis>=95 && Pfin){
    console.log("aprueba con honores")
// aprobo >70% asistencia>80%  O nota 65-69 y pfin
}else if((nota>=70 && asis>=80)||(nota>=65 && Pfin)){
    console.log("aprobado")
// recuperacion 50-69 o asistencia 60-79
}else if ((69>nota && nota>=50) || (80>asis && asis>=60)){
    console.log("recuperacion")
//reprobado
} else{
    console.log("reprobado")
}
