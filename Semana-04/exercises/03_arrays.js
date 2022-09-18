console.log('--EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
//    'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('--Exercise 3.a');
var array = ['Jaunary', 'February', 'March', 'April', 'May', 'June', 'July', 'Agost', 'September', 'October', 'November', 'December'];
console.log(array[4], array[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('--Exercise 3.b');
var arraySort = array.slice();
arraySort.sort();
console.log(arraySort);
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('--Exercise 3.c');
array.unshift('Halloween');
array.push('Christmas');
console.log(array);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('--Exercise 3.d');
array.shift();
array.pop();
console.log(array);

// e. Invertir el orden del array (utilizar reverse).

console.log('--Exercise 3.e');
var arrayReverse = array.slice();
arrayReverse.reverse();
console.log(arrayReverse);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('--Exercise 3.f');
var string = array.join('-');
console.log(string);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('--Exercise 3.g');
var copyArray = array.slice(4, 11);
console.log(copyArray);

