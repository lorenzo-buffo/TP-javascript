const maximo=40
const minimo=2
const divisor=2
const resultado= obtenerDivisores (minimo, maximo, divisor)
console.log("los divisores de" ,divisor, "entre", minimo, "y", maximo, "son:",resultado)
function obtenerDivisores (minimo, maximo, divisor){
    let divisores = [];
    for (var i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores[divisores.length]=i;  
}
    }
return divisores;
}

  