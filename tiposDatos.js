// Data types
// Number
var edad = 19;

// string
var nombre = "Tommy";



// Object
var objeto = { color: "black", size: 12};

// Boolean
var operationOK = 5 > 7;

// Undefined
var falconmasters;
document.write(falconmasters);

// Null
var numero = 2;
// --- more code
numero = null; // it deletes the value held

// NaN
var texto = "Hola como estás";
//document.write(texto * 2); 

// Array
var amigos = ["Luis", "Gabi", "Alberto"];
var amigos2 = ["Luis", "Fernando", "Oscar"];
var amigos3 = amigos.concat(amigos2); 
document.writeln(amigos3.toString() + "\n");

var amigos4 = amigos.join(" : "); // Agregates characters between the elements
document.writeln(amigos4.toString());

var ordenados = amigos.sort();
document.writeln(ordenados.toString());

document.writeln(amigos[1]);
document.writeln(amigos.length.toString());
amigos.push("Tomás"); // add new elements at the end of the array
amigos.pop();   // delete the las element

