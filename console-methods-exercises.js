/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function funcError() {
    console.error("Se esta ejecutando un error!")
}

funcError()

// 2. Crea una función que utilice warn correctamente

function funcWarn() {
    console.error("Se esta ejecutando un warn!")
}

funcWarn()

// 3. Crea una función que utilice info correctamente

function funcInfo() {
    console.error("Se esta ejecutando un Info!")
}

funcInfo()

// 4. Utiliza table

let Automovil = [
    {Marca: "Aveo", Modelo: 2008},
    {Marca: "Renault", Modelo: 2015},
    {Marca: "Toyota", Modelo: 2026}
]

console.table(Automovil)

// 5. Utiliza group

console.group("Lista de mercado: ")
console.log("Huevos: 12")
console.log("Papas: 4 Kilos")
console.log("Carne: 3 Kilos")
console.log("Leche: 5 Litros")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución"); // Inicia el temporizador

let suma = 0
for (let i = 0; i < 500; i++) {
    suma += i
}

console.log(suma)
console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo

let validarNum = -10

console.assert(validarNum >= 0, "El Número no es positivo")
console.assert(validarNum < 0, "El Número es positivo")

// 8. Utiliza count

console.count("validarNum")
console.count("validarNum")
console.count("validarNum")
console.count("validarNum")
console.countReset("validarNum")
console.count("validarNum")

// 9. Utiliza trace

function funcionA() {
    funcionB()
}

function funcionB() {
    funcionC()
}

function funcionC() {
    console.trace("Aquí se ejecutó console.trace")
}

funcionA()

// 10. Utiliza clear

console.clear()