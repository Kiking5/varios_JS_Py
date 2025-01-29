// 1. Crea una variable para cada operación aritmética

let suma = 7 + 4
let resta = 8 - 2
let multiplicacion = 4 * 5
let division = 20 / 3
let modulo = 50 % 7
let exponente = 4 ** 6


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones 
//    aritméticas

let sumaAsignacion = suma += 2
let restaAsignacion = resta -= 2
let multiplicacionAsignacion = multiplicacion *= 2
let divisionAsignacion = division /= 2
let moduloAsignacion = modulo %= 2
let exponenteAsignacion = exponente **= 2


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de 
//    comparación

console.log(5 > 3)
console.log(5 < 10)
console.log(5 >= 5)
console.log(8 <= 8)
console.log(5 != 9)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de 
//    comparación

console.log(5 < 3)
console.log(5 > 10)
console.log(5 <= 4)
console.log(8 >= 10)
console.log(5 == 9)

// 5. Utiliza el operador lógico and

console.log(5 > 3 && 8 < 10)

// 6. Utiliza el operador lógico or

console.log(5 > 3 || 8 > 10)

// 7. Combina ambos operadores lógicos

console.log(5 > 3 && 8 > 10 || 5 < 10)

// 8. Añade alguna negación


console.log(!(5 > 3 && 8 > 10 || 5 < 10))

// 9. Utiliza el operador ternario

console.log(ternario = 5 > 3 ? "Es verdadero" : "Es falso")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let comparacion = (5 + 7) < resta || (8 - 3) < suma;
console.log(comparacion)