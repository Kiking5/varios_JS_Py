/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let animales = ["Vaca", "Pollo", "perro", "Cerdo", "Cabra"]

let [animal0, animal1] = animales
console.log(animal0)
console.log(animal1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let animalGranja = {
    name: "Cloe",
    age: 5,
    animal: "Vaca",
    job: {
        leche: "ordeñar",
        litros: 2,
    }
}

let { name, age, animal, especie = "Mamifero"} = animalGranja

console.log(especie)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let{name: nameAnimal, age: ageAnimal} = animalGranja
console.log(nameAnimal)
console.log(ageAnimal)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let{name: name2, age: age2} = animalGranja
console.log(name2)
console.log(age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let{job: {leche: leche1}, job: {litros: litros1}} = animalGranja
console.log(leche1)
console.log(litros1)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let animales2 = ["Vaca", "Pollo", "perro", "Cerdo", "Cabra"]
let animalesCasa = ["Perro", "Gato", "Loro"]

let allAnimals = [...animales, ...animalesCasa]

console.log(allAnimals)

// 7. Usa propagación para crear una copia de un array

let animales3 = [...animales]

console.log(animales)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person = {
    name: "Johnattan",
    age: 40,
    alias: "Kiking5"
}

let informacion = {
    pais: "Colombia",
    profesion: "Ingeniero",
    hobby: "Programar"
}

let combinados = { ...person, ...informacion };

console.log(combinados)


// 9. Usa propagación para crear una copia de un objeto

let person2 = {...person}

console.log(person2)

// 10. Combina desestructuración y propagación

let { name3, alias, ...rest } = person

let ObjetosCombinados = { ...rest, ...informacion }

console.log(name3)
console.log(alias)
console.log(ObjetosCombinados)