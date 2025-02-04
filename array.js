// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]               // Array con un elemento con el valor de 3
myArray2 = new Array(3)     // Array con 3 elementos no definidos

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5) // Con mas valores se comporta como una Array normal

console.log(myArray)
console.log(myArray2)

myArray = ["Johnattan", "Peña", "JohnattaWeb", 37, true]
myArray2 = new Array("Johnattan", "Peña", "JohnattaWeb", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Johnattan"
//myArray2[1] = "Peña"
myArray2[0] = "JohnattaWeb"
myArray2[4] = "JohnattaWeb"

console.log(myArray2)

myArray = []
myArray[2] = "Johnattan"
//myArray[1] = "Peña"
myArray[0] = "JohnattaWeb"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Johnattan") // Agrega elementos al array
myArray.push("Peña")
myArray.push("JohnattaWeb")
myArray.push(40)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último elemento y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento y lo devuelve
console.log(myArray)

myArray.unshift("Johnattan", "JohnattaWeb") //Agrega los elementos desde el inicio del array
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // segunda forma de eliminar el contenido de un array
console.log(myArray)

// slice

myArray = ["Johnattan", "Peña", "JohnattaWeb", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 0, 3)
console.log(myArray)

myArray = ["Johnattan", "Peña", "JohnattaWeb", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)