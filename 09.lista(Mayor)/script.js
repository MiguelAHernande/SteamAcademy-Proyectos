function agn() {
    num=document.getElementById("input")
    if (num.value!=""){
        lis.push(num.value)
        nn=document.getElementById("lista").innerHTML
        nn=nn+`<span class="numero">${num.value}</span>`
        document.getElementById("lista").innerHTML=nn
        document.getElementById("mayor").innerText=`El numero mayor es ${Math.max(...lis)}`
        num.value=""
    }
}
nn=""
let lis=[]
document.getElementById("input").addEventListener("keydown" , (e) => {
    if(e.key=="Enter"){
        agn()
    }
})