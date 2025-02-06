// Map

// Declaración

let myMap = new Map()

console.log(myMap)

//Inicialización

myMap = new Map([
    ["name", "Johnattan"],
    ["lastName", "Peña"],
    ["edad", 40]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "kiking5") // Actualiza el valor en una clave existente
myMap.set("name", "Johnattan p") // Agrega clave y valor nuevas

console.log(myMap)

// get

console.log(myMap.get("name")) // Imprime el valor de la clave
console.log(myMap.get("surname"))

// has 

console.log(myMap.has("surname")) //Verifica que existe una clave
console.log(myMap.has("name"))

// delete

myMap.delete("edad") // Elimina la clave especificada


console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) // Imprime solo las claves
console.log(myMap.values()) // Imprime solo los valores
console.log(myMap.entries()) // Nos muestra claves y valores para poder recorrer o iterar

// size

console.log(myMap.size)

// clear 

myMap.clear()
console.log(myMap)

