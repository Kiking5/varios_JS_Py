// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    
}

// Sintaxis

let person = new Person("Johnattan", 40, "Kiking5")
let person2 = new Person("John", 20, "Johny")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto 

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
    
}

let person3 = new DefaultPerson()
console.log(person3)

person3 = new DefaultPerson("Johnattan", 40)
console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "kiking5" // Asignar valor a alias
console.log(person3.alias)

// Funciones en clases

class PersonWithMeThod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona esta caminando.")
    }
    
}

let person4 = new PersonWithMeThod("Johnattan", 40, "Kiking5")
person4.walk()

// Propiedades privadas

class PrivatePerson {

#bank // Se hace privada, pero se tiene que definir la propiedad en la clase con "#"

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
    
}

let person5 = new PrivatePerson("Johnattan", 40, "Kiking5", "IBANK123456789")

// No podemos acceder
// console.log(person5.bank)
// person5.bank = "new IBANK123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    
    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let person6 = new GetSetPerson("Johnattan", 40, "Kiking5", "IBANK123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBANK123456789"
console.log(person6.bank)

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido")
    }

}

class Dog extends Animal {

    sound() {
        console.log("El perro ladra!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swin() {
        console.log("El Pez nada")
    }

}

let myDog = new Dog("Dante")
myDog.run()
myDog.sound()

let myFish = new Fish("Pirañita", 12)
myFish.swin()
myFish.sound()

// Métodos estáticos

class MathOperation {

    static sum(a, b) {
        return a + b
    }
}

//let myClass = new MathOperation() // No es necesario
// console.log(myClass.sum(5, 10))

console.log(MathOperation.sum(5, 12))