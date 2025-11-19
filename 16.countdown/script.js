function reset() {
    const now=Date.now()
    const ny=new Date("Nov 30 2025").getTime()
    const d=ny-now
    
    const day=Math.ceil(d/(1000*60*60*24))
    const hour=Math.ceil(d/(1000*60*60)%24)
    const min=Math.ceil(d/(1000*60)%60)
    const sec=Math.ceil(d/(1000)%60)

    document.getElementById("day").innerHTML=day
    document.getElementById("hour").innerHTML=hour
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
}

setInterval(reset,1000)