// Strings

// Concatenación

let myName = "Johnattan"
let saludo = "Hola, " + myName + "!"
console.log(saludo)
console.log(typeof saludo)

// Longitud
console.log(saludo.length)

// Acceso a los caracteres
console.log(saludo[0])
console.log(saludo[14])

// Métodos más comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("Hola"))
console.log(saludo.indexOf("Johnattan"))
console.log(saludo.indexOf("Peña"))
console.log(saludo.includes("Hola"))
console.log(saludo.includes("Johnattan"))
console.log(saludo.includes("Peña"))
console.log(saludo.slice(0, 8))
console.log(saludo.replace("Johnattan", "John"))

// Template literals

let message = `Hola, Estoy haciendo 
un curso de JavaScript`
console.log(message)

let email = "johnattan.penna@gmail.com"
console.log(`Hola ${myName}, tu email es ${email}!`)
