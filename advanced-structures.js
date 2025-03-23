// Estructuras avanzadas

// Arrays Avanzados

// Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// Map

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// Filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// Reduce

let sum = numbers.reduce((result, current) => result + current)
console.log(sum)

// Manipulación

// Flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flapMap

let phrases = ["Hola John", "Adios John"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// Ordenación

// sort

// let unsorted = [2, 4, 3, 7, 6, 8, 10, 9]
let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [2, 4, 3, 7, 6, 8, 10, 9]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)


// reverse

sorted.reverse()
console.log(sorted)

// Búsqueda

console.log(sorted.includes(7))
console.log(sorted.includes(5))

// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex((element => element % 2 === 0))
console.log(firstEvenIndex)

// Sets avanzados

// Operaciones

// Eliminación de duplicados

/* const numbersArray = [1, 2, 3, 3, 4, 5, 6, 7, 7]
const numbersSet = new Set(numbersArray)
console.log(numbersSet) */

let numbersArray = [1, 2, 3, 3, 4, 5, 6, 7, 7]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([0, 1, 2, 3])
const setB = new Set([2, 3, 4, 5, 6])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element =>setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversión

console.log([...setA])

// Iteración

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

// Iteración

let myMap = new Map([
    ["name", "Johnattan"],
    ["age", 40]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// Conversión

// Mapa a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a diccionario u Objetos

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)