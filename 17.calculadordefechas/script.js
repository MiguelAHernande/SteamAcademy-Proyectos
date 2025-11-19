function reset() {
    const I=new Date(document.getElementById("inicio").value).getTime()
    const F=new Date(document.getElementById("final").value).getTime()
    const d=F-I
    
    const day=Math.ceil(d/(1000*60*60*24))
    const hour=Math.ceil(d/(1000*60*60)%24)
    const min=Math.ceil(d/(1000*60)%60) 
    const sec=Math.ceil(d/(1000)%60)

    document.getElementById("day").innerHTML=`Dias: ${day}`
    document.getElementById("hour").innerHTML=`Horas: ${hour}`
    document.getElementById("min").innerHTML=`Minutos: ${min}`
    document.getElementById("sec").innerHTML=`Segundos: ${sec}`
}
