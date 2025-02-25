/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
console.log(carretera)
} catch {
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(carretera)
    } catch {
        console.log("Se ha producido un error")
    } finally {
        console.log("Finalizar programa")
    }

// 3. Lanza una excepción genérica

try {
    let resultado = 10 / 0
    throw new Error("Error inesperado")
} catch (error) {
    console.log("Ha Ocurrido un error:", error.message)
}

// 4. Crea una excepción personalizada

const fruta = "Manzana"
try {
    fruta = "pera"
} catch {
    console.log("Ha Ocurrido un error")
}

// 5. Lanza una excepción personalizada

try {
    throw new Error("No se puede cambiar la fruta a 'pera'.")
} catch (error) {
    console.log(error.message)
}

// 6. Lanza varias excepciones según una lógica definida

function verificarNumero(numero) {
    if (numero < 0) {
        throw new Error("El número no puede ser negativo.")
    } else if (numero === 0) {
        throw new Error("El número no puede ser cero.")
    } else if (isNaN(numero)) {
        throw new Error("No ingreso un número válido.")
    }
    return "El número es válido: " + numero
}

try {    
        // console.log(verificarNumero(-5))
        console.log(verificarNumero(0))
        // console.log(verificarNumero(5))
        // console.log(verificarNumero("otro"))
} catch (error) {
    console.log("Error:", error.message)
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    let num1 = -5
    let num2 = 0
    let num3 = "texto"

    // if (num1 < 0) {
    //     throw new Error("El primer número es negativo.")
    // }
    // if (num2 === 0) {
    //     throw new Error("El segundo número no puede ser cero.")
    // }
    if (typeof num3 !== "number") {
        throw new Error("El tercer valor no es un número.")
    }

    console.log("Todos los valores son correctos.")
} catch (error) {
    console.log("Error:", error.message)
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ["10", "abc", "5.5", null, "20px"];

for (let valor of valores) {
    try {
        let numero = parseFloat(valor)
        if (isNaN(numero)) {
            throw new Error("No se puede convertir " + valor +" a número.")
        }
        console.log("El valor convertido es: " + numero)
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let persona = { 
    nombre: "Juan",
    edad: 40
}

function verificarPropiedad(objeto, propiedad) {
    try {
        if (!(propiedad in objeto)) {
            throw "La propiedad no existe";
        }
        console.log("La propiedad existe");
    } catch (error) {
        console.log("Error:", error);
    }
}

verificarPropiedad(persona, "nombre")
// verificarPropiedad(persona, "alias") 

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function intentar() {
    let intentos = 0

    while (intentos < 10) {
        try {
            if (Math.random() < 0.7) {  // hacemos que falle un 70% de las veces
                throw "Error"
            }
            console.log("Éxito en el intento", intentos + 1)
            return
        } catch {
            console.log("Fallo en el intento", intentos + 1)
            intentos++
        }
    }

    console.log("No se pudo después de 10 intentos.")
}

intentar()