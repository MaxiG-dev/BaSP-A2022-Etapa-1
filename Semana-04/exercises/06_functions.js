console.log('--EXERCISE 6: FUNCTIONS');

// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('--Exercise 6.a');
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1,2));

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('--Exercise 6.b');
function sum2(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('One of the parameters is not a number.');
        return NaN;
    }
    return num1 + num2;
}
console.log(sum2(1,"2"));

// Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('--Exercise 6.c');
function validate(num) {
    return Number.isInteger(num);
}

console.log(validate(1.1))

// A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

console.log('--Exercise 6.d');
function sum3(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('One of the parameters is not a number.');
        return NaN;
    }
    if (!validate(num1)) {
        alert('The num, is not integer number.');
        return Math.round(num1);
    }
    else if (!validate(num2)) {
        alert('The num2, is not integer number.');
        return Math.round(num2);
    }
    return num1 + num2;
}
console.log(sum3(1.1,2));


// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('--Exercise 6.e');
function validateSplit(num) {
    if (!validate(num)) {
        alert('The num, is not integer number.');
        return Math.round(num);
    }
    return num;
}

function sum4(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert('One of the parameters is not a number.');
        return NaN;
    }
    return validateSplit(num1) + validateSplit(num2);
}

console.log(sum4(10.1,20));
