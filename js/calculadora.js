function delta(a,b,c){
    return math.pow(b,2) - (4*a*c)
}

function x1(delta, a, b){
    return (-b + math.sqrt(delta)) / (2*a)
}