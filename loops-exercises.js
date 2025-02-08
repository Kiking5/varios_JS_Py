/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i  = 0 ; i < 20; i++) {
    console.log(`Número: ${i + 1}`)
}

let i = 0
while (i < 20) {
    console.log(`Número:  ${i + 1}`)
    i++
}

i = 0
do {
    console.log(`Número:  ${i + 1}`)
    i++
} while (i < 20)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0 // Creamos la variable y le asignamos un valor inicial
for (let i = 1; i <= 100; i++) { // Inicializamos e lbucle y su rango
    suma += i // Guardamos el acumulado de los números
}

console.log(`El resultado de sumar todos los números del 1 al 100 es: ${suma}`)

let suma2 = 0;  // let suma = 0 // Creamos la variable y le asignamos un valor inicial
i = 1;  // creamos o en este caso reasignamos la variable de control

while (i <= 100) {  // Mientras i sea menor o igual a 100, se ejecutará el bucle
    suma2 += i;  // Guardamos el acumulado de los números
    i++;  // Incrementamos i
}

console.log(`El resultado de sumar todos los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

i = 1
while (i <= 50) {
    if (i % 2 === 0) {
        console.log(`El Número par es: ${i}`)
    }
    i++
}

i = 1
for (let i = 2; i <= 50; i += 2) {
    console.log(`El Número par es: ${i}`);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

myArray = ["Johnattan", "Jose", "Maria", "Jesus", "Pedro", "Angie", "Odilia"]

for (let valor of myArray) {
    console.log(valor)
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Hola, soy una cadena de texto"
let vocales = "aeiouAEIOU"
let contador = 0

i = 0;
while (i < cadena.length) {
    if (vocales.includes(cadena[i])) {
        contador++;
    }
    i++;
}
console.log(`El número de vocales en cadena es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5, 6, 7]

let producto = 1

for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}

console.log(`La multiplicación de los números es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

i = 1
while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto

let texto = "Hola, soy un texto"
let textoInvertido = ""

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]
}

console.log(`El texto invertido de "${texto}" es: ${textoInvertido}`)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let num1 = 0, num2 = 1, siguiente

console.log(num1)
console.log(num2)

for (let i = 3; i <= 10; i++) {
    siguiente = num1 + num2 // calculamos el siguiente número
    console.log(siguiente);
    num1 = num2;  // Se actualiza num1 con el valor de num2
    num2 = siguiente; // Se actualiza nu2 con el nuevo valor
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numeros = [5, 12, 8, 20, 3, 15, 7, 25, 30, 9];
let mayoresA10 = [];
i = 0;

while (i < numeros.length) {
    if (numeros[i] > 10) {
        mayoresA10.push(numeros[i]);
    }
    i++;
}

console.log(mayoresA10);