/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Johnattan"

if (nombre === "Johnattan") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Johnattan"
let contrasena = "1234"

let user = "Johnattan"
let pass = "12345"

if (user === usuario && pass === contrasena) {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

numero = -4

if (numero === 0) {
    console.log("El Número es igual a cero")
} else if (numero > 0) {
    console.log("El Número es positivo")
} else {
    console.log("El Número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17

if (edad >= 18) {
    console.log("Es mayor de edad puede votar")
} else if (edad < 18 && edad > 0) {
    console.log("es menor de edad y le faltan " + (18 - edad) + " años para poder votar")
} else if (edad < 0) {
    console.log("Ingrese una edad válida")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let valorVariable = edad >= 18 ? "adulto" : "menor"
console.log(valorVariable)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2

if (mes == 12 || mes == 1 || mes == 2) {
    console.log("La estación es Invierno")
} else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("La estación es Primavera")
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("La estación es verano")
} else if (mes == 9 || mes == 10 || mes == 11) {
    console.log("La estación es Otoño")
} else {
    console.log("Ingrese un número de mes válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("El mes tiene 31 días")
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("El mes tiene 30 días")
} else if (mes == 2) {
    console.log("El mes tiene 28 días normalmente y 29 en año bisiesto")
} else {
    console.log("Ingrese un número de mes válido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Ingles"

switch (idioma) {
    case "Español":
        console.log("Hola!")
        break

    case "Ingles":
        console.log("Hello!")
        break

    case "frances":
        console.log("Bonjour!")
        break
    default:
        console.log("El Lenguaje no está en la base de datos")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 1:
        console.log("La estación es Invierno")
        break
    case 2:
        console.log("La estación es Invierno")
        break
    case 3:
        console.log("La estación es Primavera")
        break
    case 4:
        console.log("La estación es Primavera")
        break
    case 5:
        console.log("La estación es Primavera")
        break
    case 6:
        console.log("La estación es verano")
        break
    case 7:
        console.log("La estación es verano")
        break
    case 8:
        console.log("La estación es verano")
        break
    case 9:
        console.log("La estación es Otoño")
        break
    case 10:
        console.log("La estación es Otoño")
        break
    case 11:
        console.log("La estación es Otoño")
        break
    case 12:
        console.log("La estación es Invierno")
        break
    default:
        console.log("Ingrese un número de mes válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
        console.log("El mes tiene 31 días")
        break
    case 2:
        console.log("El mes tiene 28 días normalmente y 29 en año bisiesto")
        break
    case 3:
        console.log("El mes tiene 31 días")
        break
    case 4:
        console.log("El mes tiene 30 días")
        break
    case 5:
        console.log("El mes tiene 31 días")
        break
    case 6:
        console.log("El mes tiene 30 días")
        break
    case 7:
        console.log("El mes tiene 31 días")
        break
    case 8:
        console.log("El mes tiene 31 días")
        break
    case 9:
        console.log("El mes tiene 30 días")
        break
    case 10:
        console.log("El mes tiene 31 días")
        break
    case 11:
        console.log("El mes tiene 30 días")
        break
    case 12:
        console.log("El mes tiene 31 días")
        break
    default:
        console.log("Ingrese un número de mes válido")
}