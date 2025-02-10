// Funciones

// Simple

function myfunc(){
    console.log("¡Hola, desde una función!")
}

for (let i = 0; i < 10; i++){
    myfunc()
}

// Con Parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Johnattan")
myFuncWithParams("Peña")

// Funciones anónimas

const myfunc2 = function(name) {
    console.log(`¡Hola, ${name}!`)
}

myfunc2("Johnattan Peña")

// Funciones flecha

const myfunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

myfunc3("John")

const myfunc4 = (name) => console.log(`¡Hola, ${name}!`) // Se puede eliminar el bloque de llaves para simplificar

myfunc3("John")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 14)
sum(7) // NaN
sum() // NaN

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(6)
defaultSum(5, 14)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10))

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Funcióin interna")
    }
    intern()
}

extern()
// intern() // Error fuera del scope

// Funciones de orden superior

/*
function applyFunc(func) {
    
}
applyFunc(myfunc4("Función de orden superior"))
*/


function applyFunc(func, param) {
    func(param)
}

applyFunc(myfunc4, "Función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

myArray.forEach((value) => console.log(value))

mySet = new Set(["Johnattan", "Peña", "JohnattaWeb", 37, true, "e-mail"])

myMap = new Map([
    ["name", "Johnattan"],
    ["lastName", "Peña"],
    ["edad", 40]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))