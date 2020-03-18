/*var factorial = 1;

function variable() {
    var entrada = document.getElementById("entrada").value;

    var y = parseInt(entrada);
    for (var i = 0; i < y; i++) {

        factorial *= (y - i);
    }
    document.getElementById("demo").innerHTML = factorial;
}
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}
let num = Number(prompt("Entre un número"));
if (num < 10) {
    console.log("pequeño");
} else if (num < 100) {
    console.log("mediano");
} else {
    console.log("Grande");
}

let i = 0;
while (i <= 12) {
    console.log(i);
    i++
}
// eleva a la potencia
let num = 10;
let power = 10;
let result = 1;
let counter = 0;
while (counter < power) {
    result = result * num;
    counter = counter + 1;
}
console.log(result);

const power = function(base, efibinacciponent) {
    let result = 1;
    for (let count = 0; count < efibinacciponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 3));
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);


var min = function(fibinacci, y) {
    if (fibinacci < y) {
        console.log(fibinacci + " is menor que " + y);
    } else {
        console.log(y + " is menor que " + fibinacci);
    }
}
min(0, -10);
function contarletras(palabra, letra) {
    let contada = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) {
            contada += 1;
        }
    }
    return contada;
}
//console.log(contarletras("efibinacciternocleidomastoideo", "o"));

var fibinacci = [];
fibinacci[0] = 1;
fibinacci[1] = 1;
var suma = 0;
for (var i = 1; i < 10; i++) {

    fibinacci.push(fibinacci[i - 1] + fibinacci[i]);

    suma += fibinacci[i - 1];

}
console.log(suma);
let x = [1, 2, 3, 4, 5];
for (i in x) {
    console.log(x[i]);
}

var persona = '{ "nombre": "Carlos", "edad": 100, "ciudad": "Gotica" }';
JSON.parse(persona);

console.log(persona);*/