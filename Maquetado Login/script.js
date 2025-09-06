user=false

function logIn () {
    Luser=document.getElementById("usuario").value
    Lcontr=document.getElementById("contr").value

    if(user==false){
        alert("crea un usuario primero")
    }else if (user==Luser){
            if(contr==Lcontr){
                alert("sesion iniciada")
            }else{
                alert("contraseña incorrecta")
            }
    }else{
        alert("usuario incorrecto")
    }
    

}
function SignIn () {
    user=document.getElementById("usuario").value
    contr=document.getElementById("contr").value

    alert(`usuarioa: ${user} \ncontraseña: ${contr}`)

}