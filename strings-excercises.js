/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let texto1 = "El texto número 1"
let texto2 = "El texto número 2"

console.log( texto1 + " Concatenado con  " + texto2)

// 2. Muestra la longitud de una cadena de texto

console.log(texto1.length)

// 3. Muestra el primer y último carácter de un string

// Método con slice

console.log(texto1.slice(0, 1))
console.log(texto1.slice(-1))

//Método con corchetes

console.log(texto1[0])
console.log(texto1[texto1.length - 1])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(texto1.toUpperCase())

console.log(texto2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let texto3 = `Hola, soy una 
cadena de texto
en varias lineas.`

console.log(texto3)

// 6. Interpola el valor de una variable en un string

console.log(`El contenido de texto1 es: ${texto1} y el de texto2 es: ${texto2}.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(texto1.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(texto1.includes("texto"))

// 9. Comprueba si dos strings son iguales

console.log(texto1 === texto2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(texto1.length === texto2.length)