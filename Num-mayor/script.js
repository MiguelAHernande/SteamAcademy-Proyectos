function comp() {
    num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value)
    num3=parseInt(document.getElementById("num3").value)
    const box1=document.getElementById("box1")
    const box2=document.getElementById("box2")
    const box3=document.getElementById("box3")

    if (num1==num2 && num1==num3){
        box1.className="max"
        box2.className="max"
        box3.className="max"
    }else if (num1>=num2 && num1>num3){
        if(num1==num2){
            box1.className="max"
            box2.className="max"
            box3.className="min"
        }else{
            box1.className="max"
            box2.className="min"
            box3.className="min"
        }
    }else if (num2>=num3 && num2>num1){
        if(num2==num3){
            box1.className="min"
            box2.className="max"
            box3.className="max"
        }else{
            box1.className="min"
            box2.className="max"
            box3.className="min"
        }
    }else if (num3>=num1 && num3>num2){
        if(num3==num1){
            box1.className="max"
            box2.className="min"
            box3.className="max"
        }else{
            box1.className="min"
            box2.className="min"
            box3.className="max"
        }
    }
}


num1.addEventListener("input",comp)
num2.addEventListener("input",comp)
num3.addEventListener("input",comp)