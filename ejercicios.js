// Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}


// Utilizar un bucle para convertir temperaturas y almacenar resultados en un nuevo array
const temperaturasFahrenheit = [];
for (let i = 0; i < temperaturasCelsius.length; i++) {
  temperaturasFahrenheit.push(celsiusToFahrenheit(temperaturasCelsius[i]));
}

// Mostrar ambos arrays en la consola
console.log("Temperaturas en Celsius:", temperaturasCelsius);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);


// Suma de los primeros 10 números naturales
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}

// Imprimir el resultado de la suma en la consola
console.log("La suma de los primeros 10 números naturales es:", suma);

// Solicitar al usuario un número
const numeroUsuario = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es primo
let esPrimo = true;
for (let i = 2; i < numeroUsuario; i++) {
  if (numeroUsuario % i === 0) {
    esPrimo = false;
    break;
  }
}

// Mostrar el resultado en la consola
if (esPrimo) {
  console.log(`${numeroUsuario} es un número primo.`);
} else {
  console.log(`${numeroUsuario} no es un número primo.`);
}


// Generar los primeros 10 términos de la secuencia de Fibonacci
let terminoAnterior = 0;
let terminoActual = 1;

console.log("Secuencia de Fibonacci (primeros 10 términos):");

// Imprimir cada término en el bucle
for (let i = 0; i < 10; i++) {
  console.log(terminoAnterior);
  const siguienteTermino = terminoAnterior + terminoActual;
  terminoAnterior = terminoActual;
  terminoActual = siguienteTermino;
}

