// Objetos

// Sintaxis

let person = {
    name: "Johnattan",
    age: 40,
    alias: "Kiking5"
}

// Acceso a propiedades

// Notación punto
person.name // Johnattan
person.age // 40
person.alias // kiking5

console.log(person.name)

// Notación de corchetes

person["name"] // Johnattan
person["age"] // 40
person["alias"] // Kiking5

console.log(person["alias"])

// Modificación de propiedades

person.name = "John Peña"
console.log(person.name)

console.log(typeof person.age)
person.age = "40"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Añadir nueva propiedad

person.email = "jonattan.penna@gmail.com"
person["age"] = 40

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Johnattan",
    age: 40,
    alias: "Kiking5",
    walk: function(){
        console.log("La persona esta caminando.")
    }
}

person2.walk()

// Anidación de objetos

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

console.log(person3)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

console.log(person)

let person4 = {
    name: "John Peña",
    alias: "Kiking5",
    email: "johnattan.penna@gmail.com",
    age: 40
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // Debe ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("John", 40)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)