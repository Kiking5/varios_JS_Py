/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función

function Model() {
    Auto()
}

function Auto() {
    console.log("Hola soy un Automovil")
}

Model()

// 2. Implementa una función currificada que multiplique 3 números

function Multiplica(a) {
    return function (b) {
        return function (c) {
            return (a * b * c )
        }
    }
}

const resultado = Multiplica(2)(3)(5)
console.log(resultado)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

const potencia = function (a, b) {
    console.log(a**b)
}
potencia(3, 7)

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valorInicial) {
    let contador = valorInicial

    return {
        increment: function() {
            contador++
        },
        decrement: function () {
            if (contador > 0) {
                contador--
            } else {
                console.log("El contador no puede ser menor a 0")
            }
        },
        getValue: function() {
            return contador
        }
    }
}

const counter = createCounter(2)
console.log(counter.getValue())

counter.increment()
console.log(counter.getValue())

counter.increment()
console.log(counter.getValue())

counter.decrement()
console.log(counter.getValue())

counter.decrement()
console.log(counter.getValue())

counter.decrement()
console.log(counter.getValue())

counter.decrement()
console.log(counter.getValue())

counter.decrement()
console.log(counter.getValue())


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {

    let sum = 0

    for (let num of numbers) {
        sum += num
    }

    return sum * multiplier
}


console.log(sumManyTimes(2, 1, 2, 3, 4))
console.log(sumManyTimes(3, 5, 5, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumaConCallback(callback, ...numeros) {
    const suma = numeros.reduce((total, num) => total + num, 0)
    callback(suma)
}

function mostrarResultado(resultado) {
    console.log(`El resultado de la suma es: ${resultado}`)
}

sumaConCallback(mostrarResultado, 1, 2, 3, 4, 5, 6)
sumaConCallback(mostrarResultado, 10, 20, 30, 40, 50)


// 7. Desarrolla una función parcial

function partialMul(a) {
    return function(b, c) {
        return a * b * c 
    }
}

const multWith = partialMul(2)
console.log(multWith(3, 6))


// 8. Implementa un ejemplo que haga uso de Spread

const cadena = ["Hola", "soy", "una", "Cadena", "de", "texto."]
function impCadena(...palabras) {
    return palabras.join(" ")
}

console.log(impCadena(...cadena))

// 9. Implementa un retorno implícito

const double = x => x*2
console.log(double(7))

// 10. Haz uso del this léxico

const operation = {
    a: 20,
    b: 30,
    suma: function () {
        console.log(this.a + this.b)
    }
}

operation.suma()