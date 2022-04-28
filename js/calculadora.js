function delta(a,b,c){

    var resposta = {};

    let delta = math.pow(b,2) - (4*a*c);

    if (delta < 0 ){
        return resposta = "Não tem raiz Real" 
    }else if (delta > 0){
        resposta.x1 = (-b + Math.sqrt(delta)) / (2*a);
        resposta.x2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log(resposta);
        console.log(delta);
        return resposta;

    }else{
        let resposta = -b / 2* a
        return resposta
    }
}
    
function x1(delta, a, b){
    return (-b + math.sqrt(delta)) / (2*a)
}

function x2(delta, a, b){
    return (-b - math.sqrt(delta)) / (2*a)
}

export {delta ,x1 ,x2}