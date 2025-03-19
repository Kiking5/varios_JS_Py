// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola ${name}`)
}

greet("Johnattan")

function processGreting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting(name) {
    return greet
}

processGreting(greet, "John")
const greet2 = returnGreeting()
greet2("Johnattan Peña")

// Arrow functions avanzadas

// Retorno implicito
const multiply = (a, b) => a * b
console.log(multiply(3, 9))

// This léxico
const handler = {
    name: "Johnattan",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de función invocada inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(sum(7, 8))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin spread
console.log(sumWithSpread(...numbers)) // Con spread

// Clousures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()
counter2()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(7))

// Funciones parciales

function partialSum(a) {
    return function(b, c) {
        return sum(a, b, c)
    }
}
const sumWith = partialSum(10)
console.log(sumWith(6, 7))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function procesData(data, Callback) {
    const result = sum(...data)
    Callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`El resultado es: ${result}`)
}

procesData([5, 8, 3], processResult)
procesData([5, 8, 3], processResult2)

procesData([5, 8, 3], (result) => {
    console.log(`El resultado enla arrow function es: ${result}`)
})