/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    console.log(a + b)
}

sum(10, 20)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

numbers = [1, 2, 3, 8, 4 ,5 ]

function maxNumber(numbers) {
    let max = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    console.log(max)
}

maxNumber(numbers)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
    let vocales = "aeiouAEIOU"
    let contador = 0
    
    let i = 0
    while (i < texto.length) {
        if (vocales.includes(texto[i])) {
            contador++
        }
        i++
    }
    
    console.log(`El número de vocales en el texto es: ${contador}`)
}

contarVocales("Hola, Soy un texto")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let myArray = ["hola", "soy", "un", "array"]

function mayus(array) {
    let mayusArray = []
    for (let i = 0; i < array.length; i++) {
        mayusArray.push(array[i].toUpperCase())
    }
    return mayusArray
}

console.log(mayus(myArray))

myArray = ["hola", "soy", "un", "array"]

function mayus(array) {
    return array.map(palabra => palabra.toUpperCase())
}

console.log(mayus(myArray))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
    if (numero < 2) return false

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

console.log(esPrimo(3))
console.log(esPrimo(4))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3, 4, 5, 6, 7, 8,]
let array2 = [6, 7, 8, 9, 10, 11]
let comunes = []

function elementosComunes() {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comunes.push(array1[i])
        }
    }
    return comunes
}

console.log(elementosComunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma = 0

function sumaPar() {
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            suma += arrayNumeros[i]
        }
    }

    return suma
}

console.log(sumaPar())


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = []

function cuadrados() {
    for (let i = 0; i < arrayNumeros2.length; i++) {
        resultado.push(arrayNumeros2[i] ** 2)
    }
    return resultado
}

console.log(cuadrados())

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let texto1 = "Hola Soy un texto"

function invertirTexto() {
    let textoAlReves = texto1.split(" ").reverse().join(" ")
    return textoAlReves
}

console.log(invertirTexto())

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n < 0) return "Los Números negativos no tienen factorial"
    let resultado = 1

    for (let i = 1; i <= n; i++) {
        resultado *= i
    }

    return resultado
}

console.log(factorial(8))
