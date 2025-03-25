/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map

let cuadrado = numeros.map(i => i ** 2)
console.log(cuadrado)

// Filter

let mayorQue = numeros.filter(i => i >= 5)
console.log(mayorQue)

// Reduce

let multiplicación = numeros.reduce((resultado, numActual) => resultado * numActual)
console.log(multiplicación)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let cubo = numeros.map(i => i ** 3)

let paresCubo = cubo.filter(i => i % 2 === 0)
console.log(paresCubo)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la 


let textArray = ["Vaca", ["Cerdo", ["Gallo", ["Pato", ["Paloma"]]]]]
console.log(textArray)
let flatArray = textArray.flat(1)
console.log(flatArray)
flatArray = textArray.flat(2)
console.log(flatArray)
flatArray = textArray.flat(3)
console.log(flatArray)
flatArray = textArray.flat(4)
console.log(flatArray)

// flatMap

let frases = ["Hola mundo", "me gusta JavaScript y", "Me gusta programar"]
let palabras2 = frases.flatMap(frase => frase.split(" "))
console.log(palabras2)

// 4. Ordena un array de números de mayor a menor

let numDesordenados = [10, 5, 15, 30, 22, 47, 1]
let numOrdenados = numDesordenados.sort((a, b) => a - b)
console.log(numOrdenados.reverse())

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const animalesGranja = new Set(["Vaca", "Perro", "Cerdo", "Gallina", "Gato", "Raton", "Pato"])
const animalesCiudad = new Set(["Perro", "Gato", "Raton"])

// Unión

const union = new Set([...animalesGranja, ...animalesCiudad])
console.log(union)

// Intersección

const interseccion = new Set([...animalesGranja].filter(element => animalesCiudad.has(element)))
console.log(interseccion)

// Diferencia

const diferencia = new Set([...animalesGranja].filter(element => !animalesCiudad.has(element)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior

console.log("Unión:")
union.forEach(animal => console.log(animal))

console.log("Intersección:")
interseccion.forEach(animal => console.log(animal))

console.log("Diferencia:")
diferencia.forEach(animal => console.log(animal))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos

let estudiantes = new Map([
    [1, {
        nombre: "Johnattan",
        edad: 40,
        email: "johnattan.penna@gmail.com"
    }],
    [2, {
        nombre: "Ana",
        edad: 30,
        email: "ana@ana.com"
    }],
    [3, {
        nombre: "Carlos",
        edad: 25,
        email: "carlos@carlos.com"
    }]
])

estudiantes.forEach((estudiante, id) => {
    console.log(`Código: ${id}, Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Email: ${estudiante.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres

let nombres = Array.from(estudiantes.values()).map(estudiante => estudiante.nombre)
console.log(nombres)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let emails = Array.from(estudiantes.values()).map(estudiante => estudiante.email)
console.log(emails)

let setEmails = new Set(emails)
console.log(setEmails)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let estudiantesObjeto = Object.fromEntries(estudiantes)
console.log(estudiantesObjeto)

let estudiantesEmailMap = new Map(
    Object.values(estudiantesObjeto).map(estudiante => [estudiante.email, estudiante])
)

console.log(estudiantesEmailMap)