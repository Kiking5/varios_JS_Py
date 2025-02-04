// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Johnattan", "Peña", "JohnattaWeb", 37, true, "e-mail"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("pagina-web") // añade al final del set

console.log(mySet)

mySet.delete("pagina-web") // se borra el elemento descrito, no se puede por indice

console.log(mySet)

console.log(mySet.delete("Johnattan")) // true busca el elemento y lo elimina 
console.log(mySet.delete("4"))  // false El elemento no existe

console.log(mySet)

// has

console.log(mySet.has("Johnattan"))
console.log(mySet.has("Peña")) 

// size

console.log(mySet.size)

// convertir un set a un array
let myArray = Array.from(mySet)
console.log(myArray)

// convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

// El set no permite elementos duplicados a diferencia de array donde si se permiten 
console.log(mySet)

mySet.add("Johnattan")
mySet.add("Johnattan")
mySet.add("Johnattan") 