let myArray = [1, 2, 3, 4]

let person = {
    name: "Johnattan",
    age: 40,
    alias: "Kiking5"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis Arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis de arrays con valor por defecto

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos Array

let [myValue10, , , myValue13] = myArray

console.log(myValue10)
console.log(myValue13)

// Sintaxis objetos

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objetos con valores predeterminados

let { name2, age2, alias2, email = "johnattan.penna@gmail.com" } = person

console.log(name2) // Undefined
console.log(age2) // Undefined
console.log(alias2) // Undefined
console.log(email)

// Sintaxis objetos con nuevos nombres de variables


let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

let person3 = {
    name: "Johnattan",
    age: 40,
    alias: "Kiking5",
    walk: function(){
        console.log("La persona esta caminando.")
    },
    job: {
        name: "Programador",
        exp: 0,
        work: function(){
            console.log(`La persona de ${this.exp} años de experiencia esta trabajando.`)
        }
    }
}

let{name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)

// propagación (...)

// Sintaxis array

let myArray2 = [...myArray, 5, 6] 

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray] 

console.log(myArray3)

// Combinaciín de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objetos

let person4 = {...person, email: "johnattan.penna@gmail.com"}

console.log(person4)

// Copia de objetos

let person5 = {...person}

console.log(person5)