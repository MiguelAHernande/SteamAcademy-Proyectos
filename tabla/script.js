function ada() {
    for (i=1;i<=10;i++){   
        nn=document.createElement("tr")
        for(j=1;j<=10;j++){   
                re=document.createElement("td")
                re.innerText=`${i*j}`
                if(i==1 || j==1){
                    re.style.backgroundColor="#F0F0F0"
                }
                nn.appendChild(re)
        }
        document.getElementById("aqui").appendChild(nn)
    }
}