/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Elefante", "Raton", "Aguila"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.push("Ballena")
animales.unshift("Vaca") 
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1) // se elimina Gato en tercera posición en el indice 2
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["La Biblia", "La Odisea", "Cien años de soledad", "Crimen y castigo", "El túnel"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add("Platero y yo")
libros.add("La Odisea")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("La Biblia")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mesMap = new Map([
    ["mes 1", "Enero"],
    ["mes 2", "Febrero"],
    ["mes 3", "Marzo"],
    ["mes 4", "Abril"],
    ["mes 5", "Mayo"],
    ["mes 6", "Junio"],
    ["mes 7", "Julio"],
    ["mes 8", "Agosto"],
    ["mes 9", "Septiembre"],
    ["mes 10", "Octubre"],
    ["mes 11", "Noviembre"],
    ["mes 12", "Diciembre"]
])
console.log(mesMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mesMap.has("mes 5"))
console.log(mesMap.get("mes 5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mesMap.set("mesesVerano", ["Junio", "Julio", "Agosto"])
console.log(mesMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = [1, 2, 3, 4] 
let set = new Set(array) // Convierto el array a un set
let map = new Map() // Creo un map
map.set("miSet", set) // Almaceno el set en el map
console.log(map)