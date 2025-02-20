/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Vehiculo {

    constructor(marca, modelo, ruedas) {
        
        this.marca = marca
        this.modelo = modelo
        this.ruedas = ruedas

    }

}

// 2. Añade un método a la clase que utilice las propiedades

class Automovil {

    constructor(marca, modelo) {
        
        this.marca = marca
        this.modelo = modelo

    }

    mostrarInformacion() {
        console.log("El Automovil es un " + this.marca + " del año " + this.modelo)
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función

let miAuto = new Automovil("Aveo", 2008)
miAuto.mostrarInformacion()

// 4. Añade un método estático a la primera clase

class Vehiculo2 {

    constructor(marca, modelo, ruedas) {
        
        this.marca = marca
        this.modelo = modelo
        this.ruedas = ruedas

        }
        static distancia(kilometros, hora) {
            return kilometros / hora 
        }

}

// 5. Haz uso del método estático

console.log(Vehiculo2.distancia(52, 2) + " Kilometros")

// 6. Crea una clase que haga uso de herencia

class Moto extends Vehiculo {
    constructor(marca, modelo, ruedas) {
        super(marca, modelo, ruedas)
    }

    run() {
        console.log("La moto corre entre los carros")
    }
}

let myMoto = new Moto("Boxer", 2025, 2)
myMoto.run()
console.log(myMoto.marca)
console.log(myMoto.modelo)
console.log(myMoto.ruedas)

// 7. Crea una clase que haga uso de getters y setters

class Producto {
    #precio

    constructor(nombre, precio) {
        this.nombre = nombre
        this.#precio = precio
    }

    get precio() { 
        return this.#precio 
    }
    set precio(nuevoPrecio) { 
        this.#precio = nuevoPrecio 
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

let item = new Producto("Laptop", 1000);
item.precio = 1200
console.log(item.precio)

// 9. Utiliza los get y set y muestra sus valores

let item2 = new Producto("Laptop", 1000);
item2.precio = 1200
console.log(item2.precio)

item2.precio = -500
console.log(item2.precio)

// 10. Sobrescribe un método de una clase que utilice herencia 

class Vehiculob {
    constructor(marca, modelo, ruedas) {
        this.marca = marca
        this.modelo = modelo
        this.ruedas = ruedas
    }

    // Se agrega el método para mostrar la información
    mostrarInformacion() {
        console.log("Vehículo: " + this.marca + ", Modelo: " + this.modelo + ", Ruedas: " + this.ruedas)
    }
}

class Motos extends Vehiculo {
    constructor(marca, modelo, ruedas, tipo) {
        super(marca, modelo, ruedas)
        this.tipo = tipo
    }

    // Sobrescribir el método 
    mostrarInformacion() {
        console.log("Moto: " + this.marca + ", Modelo: " + this.modelo + ", Ruedas: " + this.ruedas)
    }
}

// Crear instancias y probar el método sobrescrito
let vehiculo3 = new Vehiculob("Toyota", 2023, 4)
let moto3 = new Motos("Honda", 2025, 2, "Deportiva")

// Llamada a métodos
vehiculo3.mostrarInformacion()
moto3.mostrarInformacion()