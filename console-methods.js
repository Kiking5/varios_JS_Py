// Console

// log

console.log("Hola Johnattan")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos: ", new Error("Sin Conexión"))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional")

// table

let data = [
    ["Johnattan", 40],
    ["Ana", 22]
]

console.table(data)

data = [
    {name: "Johnattan", age: 40},
    {name: "Ana", age: 22}
]

console.table(data)

// group

console.group("Usuario: ")
console.log("Nombre: Johnattan")
console.log("Edad: 40")
console.groupEnd()

// time

console.time("Tiempo de ejecución 1")

for(let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for(let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

console.timeEnd("Tiempo de ejecución 2")

// assert

let age = 10
console.assert(age >= 18, "El Usuario debe ser mayor de edad")

// count

console.count("click")
console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// Clear

// console.clear()