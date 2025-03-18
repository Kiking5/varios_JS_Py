/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function saludo() {
    return "Hola Johnattan"
}

// 2. Exporta una constante

export const myName = "Johnattan"

// 3. Exporta una clase

export class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    
}

// 4. Importa una función

// import { saludo } from "./modules-exercises"

// 5. Importa una constante

// import { saludo, myName } from "./modules-exercises"

// 6. Importa una clase

// import { saludo, myName, Person } from "./modules-exercises"

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function despedir() {
    return "Adios Johnattan"
}

//export default const myLastName = "Johnattan" // No permite exportar mas default

/* export default class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    
} */  // No permite exportar mas default

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

/* import despedir, { saludo, myName, Person } from "./modules-exercises";

console.log(saludo())
console.log(myName)

const persona = new Person("Johnattan", 30, "Kiking5")
console.log(persona.name)
console.log(persona.age)
console.log(persona.alias)

console.log(despedir())
 */

// 9. Exporta una función, una constante y una clase desde una carpeta

/*

// Contenido del archivo myModules en la carpeta modules

// Función
export function saludo() {
    return "Hola Johnattan desde un módulo en carpeta"
}

// Constante
export const myName = "Johnattan"

// Clase
export class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//////////////////////////////////////////////////////////

// Se importa desde la carpeta llamada modules
import { saludo, myName, Person } from "./modules/myModule.js";

console.log(saludo()) // "Hola Johnattan desde un módulo en carpeta"
console.log(myName) // "Johnattan"

const persona = new Person("Johnattan", 30, "Kiking5")
console.log(persona.name)
console.log(persona.age)
console.log(persona.alias) */

//////////////////////////////////////////////////

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

/* 

// Contenido del archivo otherModule.js en la carpeta otherModules

// Función
export function despedida() {
    return "Adiós, Johnattan desde otro módulo"
}

// Constante
export const country = "Colombia"

// Clase
export class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
    }
}

// Importamos desde la carpeta otherModule

// Importamos desde la carpeta "otherModules"
import { despedida, country, Animal } from "./otherModules/otherModule.js"

console.log(despedida())
console.log(country)

const mascota = new Animal("Max", "Perro")
console.log(mascota.name)
console.log(mascota.species)
*/