// Descripción de Arrays
// En JavaScript, un array es una estructura de datos que te permite almacenar y acceder a múltiples valores bajo un solo nombre. Los elementos en un array se almacenan en posiciones numeradas llamadas índices.

// **Ejemplos de Arrays

// Definir un array con diferentes tipos de datos
let miArray = [1, 'dos', true, 4.5];

// Acceder a un elemento del array por índice y imprimirlo en consola
console.log("Elemento en el índice 2:", miArray[2]); 

// Modificar un elemento del array
miArray[1] = 'nuevoValor';

// Imprimir el array completo después de la modificación
console.log("Array modificado:", miArray);

// Descripción de Bucle for
// El bucle 'for' es una estructura de control de flujo que permite ejecutar un bloque de código repetidamente. Se utiliza comúnmente para recorrer elementos en un array.

// **Ejemplos de Bucle for

// Imprimir números del 1 al 5 usando un bucle for
console.log("Imprimir números del 1 al 5 con bucle for:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Sumar elementos de un array usando bucle for
let numeros = [2, 4, 6, 8, 10];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma de elementos:", suma);


//* */ Descripción de Bucle while
// El bucle 'while' es otra estructura de control de flujo que ejecuta un bloque de código mientras una condición especificada sea verdadera.

// Ejemplos de Bucle while

// Imprimir números del 1 al 5 usando un bucle while
console.log("Imprimir números del 1 al 5 con bucle while:");
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// Encontrar el primer número mayor a 10 en un array usando bucle while
let numerosArray = [5, 8, 12, 7, 15];
let indice = 0;
while (numerosArray[indice] <= 10) {
  indice++;
}
console.log("Primer número mayor a 10:", numerosArray[indice]);
