import {delta} from 'calculadora.js'

function bhaskara(){

    let a = document.getElementById("numA").value
    let b = document.getElementById("numB").value
    let c = document.getElementById("numC").value

    let resposta  = delta(a,b,c)

    if (typeof(resposta.x1) == "undefined"){
        document.getElementById('resposta').innerHTML =  resposta
    }else{
        document.getElementById('resposta').innerHTML =  "{x1 = "+resposta.x1 + " &   x2 = "+  resposta.x2 + "}"
        
    }

}

document.getElementById('num').addEventListener("click",bhaskara)