/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let carro = {
    modelo: 2008,
    marca: "Aveo emotion",
    color: "negro"
}

console.log(carro)

// 2. Accede y muestra su valor

console.log(carro.modelo)
console.log(carro.marca)
console.log(carro.color)

// 3. Agrega una nueva propiedad

carro.cupo = "4 Personas"

console.log(carro)

// 4. Elimina una de las 3 primeras propiedades

delete carro.color

console.log(carro)

// 5. Agrega una función e invócala

carro.conducir = function() {
    console.log("El carro esta siendo conducido")
}

console.log(carro)
carro.conducir()

// 6. Itera las propiedades del objeto

for (let propiedad in carro) {
    console.log(`${propiedad}: ${carro[propiedad]}`);
}

// 7. Crea un objeto anidado

let carro2 = {
    modelo: 2008,
    marca: "Aveo emotion",
    color: "negro",
    motor: {
        cilindraje: 1600,
        caballosDeFuerza: 103
    }
}

console.log(carro2.motor)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(carro2.motor.cilindraje)
console.log(carro2.motor.caballosDeFuerza)

// 9. Comprueba si los dos objetos creados son iguales

console.log(carro == carro2)
console.log(carro === carro2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(carro.marca == carro2.marca)
console.log(carro.marca == carro2.modelo)