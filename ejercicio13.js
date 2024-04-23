let personas = [
    { nombre: "luis", sexo: "hombre", edad: 20 },
    { nombre: "juan", sexo: "hombre", edad: 12},
    { nombre: "ana", sexo: "mujer", edad: 33 },
    { nombre: "carlos", sexo: "hombre", edad: 50 },
    { nombre: "carla", sexo: "mujer", edad: 15 },
];
  

function calcularPromedioEdad(listaPersonas) {
    let totalEdad = 0;
    listaPersonas.forEach(persona => {
        totalEdad += persona.edad;
    });
    return totalEdad / listaPersonas.length;
}

function nombreMujerMayorEdad(listaPersonas) {
    let mayorEdad = 0;
    let nombreMujerMayorEdad = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "mujer" && persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMujerMayorEdad = persona.nombre;
        }
    });
    return nombreMujerMayorEdad;
}

function nombreHombreMenorEdad(listaPersonas) {
    let menorEdad = Infinity;
    let nombreHombreMenorEdad = "";
    listaPersonas.forEach(persona => {
        if (persona.sexo === "hombre" && persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreHombreMenorEdad = persona.nombre;
        }
    });
    return nombreHombreMenorEdad;
}

function promedioEdadMujeres(listaPersonas) {
    let totalEdadMujeres = 0;
    let cantidadMujeres = 0;
    listaPersonas.forEach(persona => {
        if (persona.sexo === "mujer") {
            totalEdadMujeres += persona.edad;
            cantidadMujeres++;
        }
    });
    return totalEdadMujeres / cantidadMujeres;
}

let promedioEdadTotal = calcularPromedioEdad(personas);

let mujerMayorEdad = nombreMujerMayorEdad(personas);

let hombreMenorEdad = nombreHombreMenorEdad(personas);

let promedioEdadMujeresTotal = promedioEdadMujeres(personas);

console.log("Promedio de edad total:", promedioEdadTotal);
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad);
console.log("Nombre del hombre con menor edad:", hombreMenorEdad);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeresTotal);