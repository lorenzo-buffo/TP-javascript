let listaPersonas = [
    { nombre: "luis", sexo: "hombre", edad: 20 },
    { nombre: "juan", sexo: "hombre", edad: 12},
    { nombre: "ana", sexo: "mujer", edad: 33 },
    { nombre: "carlos", sexo: "hombre", edad: 50 },
    { nombre: "carla", sexo: "mujer", edad: 15 },
  ];

let sumaEdades = 0;
    for (let i = 0; i < listaPersonas.length; i++) {
        sumaEdades += listaPersonas[i].edad;
    }

let promedioEdad = sumaEdades / listaPersonas.length;

let mujeres = listaPersonas.filter(persona => persona.sexo === "mujer");
mujeres.sort((a, b) => b.edad - a.edad);

let nombreMujerMayorEdad = mujeres[0].nombre;

let hombres = listaPersonas.filter(persona => persona.sexo === "hombre");
hombres.sort((a, b) => a.edad - b.edad);

let nombreHombreMenorEdad = hombres[0].nombre;

let edadesMujeres = mujeres.map(mujer => mujer.edad);
let sumaEdadesMujeres = edadesMujeres.reduce((a, b) => a + b, 0);

let promedioEdadMujeres = sumaEdadesMujeres / edadesMujeres.length;

console.log("Promedio de edad total:", promedioEdad)
console.log("Nombre de la mujer con mayor edad:", nombreMujerMayorEdad)
console.log("Nombre del hombre con menor edad:", nombreHombreMenorEdad)
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres)