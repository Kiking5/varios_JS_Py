// Exception

// Produce una excepción
let myObject
// console.log(myObject.email)

// Tratamiento de errores

// try-catch

try {
    // Código que se intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Capturar un error

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// finally

try {
    console.log(myObject)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

// No esta soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errrores

// throw

// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación solo suma números")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando pasar cero", a, b )
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// Captura varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error) {
    console.log("Se ha producido un error: ", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}
