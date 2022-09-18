console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
//    (utilizar toUpperCase).

console.log('--Exercise 2.a');
var string = 'My favorite fruit is strawberry';
var stringMayus = string.toUpperCase();
console.log(stringMayus);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//    caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('--Exercise 2.b');
var string = 'My favorite fruit is strawberry';
var string5Characters = string.substring(0,5);
console.log(string5Characters);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//    caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('--Exercise 2.c');
var string = 'My favorite fruit is strawberry';
var stringLast3Characters = string.substring(string.length - 3);
console.log(stringLast3Characters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las
//    demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('--Exercise 2.d');
var string = 'my fAvoRite frUIT is strawberry';
var stringSplit1 = string.substring(0, 1).toUpperCase();
var stringSplit2 = string.substring(1).toLowerCase();
var stringResult = stringSplit1 + stringSplit2;
console.log(stringResult);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
//    del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('--Exercise 2.e');
var string = 'My favorite fruit is strawberry';
var stringIndex = string.indexOf(' '); 
console.log(stringIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//    palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('--Exercise 2.f');
var string = 'my fAvoRite frUIT is strawberry';
var stringSpace = string.indexOf(' ');
var stringSplit1 = string.substring(0, 1).toUpperCase();
var stringSplit2 = string.substring(1, stringSpace + 1);
var stringSplit3 = string.substring(stringSpace + 1, stringSpace + 2).toUpperCase();
var stringSplit4 = string.substring(stringSpace + 2).toLowerCase();
var stringResult = stringSplit1 + stringSplit2 + stringSplit3 + stringSplit4;
console.log(stringResult);


