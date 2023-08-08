
/** 
 TRABAJO EN CLASE

 /*
// Se ytiliza para declara una variable
let player= 'Juan Carlos';
player=2023; 
/*
Para declarar anteriormente se utilizaba la palabbra var, lo que esto implicaba problemas en la progrmacion.
*/
/*
var PlayerDos='Peludo';
//e imprime para imprimir en panatalla.
console.log(PlayerDos.length);
let a;
a = 3.1416;

 */

/**
 Crear un archivo de JavaScript que contenga lo siguiente:
Declaración de variables usando las palabras clave const y let.
Leer los condicionales que existen en JavaScript del link entregado, y de cada uno realizar un ejemplo, distinto al de la página, usando los condicionales en JavaScript.
El archivo a entregar debe estar consignado en GitHub.  Se entrega en esta tarea solo el enlace al repositorio de GitHub.

Logical Operator ||                 
Ternary Operator
else Statement
Logical Operator &&
switch Statement
if Statement
Logical Operator !
Comparison Operators
    === strict equal
    !== strict not equal
    > greater than
    >= greater than or equal
    < less than
    <= less than or equal
else if Clause
 */


const prompt = require("prompt-sync")();

// Declarecion de variables
const A = 15, B = 4, C = -9;
//Condicional > mayor que
console.log(A > 3);
console.log(A > C);
//Condicional < menor que
console.log( A < C);
console.log(B < C);
//Condicional Diferente de
console.log(B!= C);
//Condicional igual que
console.log(A == 3);
//condicional de multiplicaion
console.log(A * B == 15);
console.log( A * B == -30 );
//condicional de division
console.log(C / B < A);
console.log(C / B == -10);
console.log(C / B == -4);
//condicional de suma
console.log(A + B + C == 5);
//condicional de &&
console.log((A+B == 8) && (A-B == 2) );
//condicional de ||
console.log((A+B == 8) || (A-B == 6));

console.log(A > 3 && B > 3 && C < 3);
console.log(A > 3 && B >= 3 && C < -3);

// Funcion flecha evaluando con el condicional if y elif
const DevolverSaludo=(nombre, esDeDia) => {
    let saludo;
    if(esDeDia) {
        saludo="Buenos Dias";
    }   
    else{
        saludo="Buenas noches";
        }
    return saludo + ", " + nombre;
    
}
console.log(DevolverSaludo('sergio',false)); 

//Evaluando con el condicional Ternary dentro de una funcion flecha
const DevolverSaludo2=(nombre2, esDeDia2) => {
    const saludo2= esDeDia2 ?  "Buenos Dias":"Buenas noches";  
    return saludo2 + ", " + nombre2;   
}
console.log(DevolverSaludo2('sergio',true)); 

let estacion = prompt("Escribe una estación en minúsculas:  ");

switch (estacion){
	case "invierno":
		console.log("El invierno es frío.");
		break;

	case "primavera":
		aleconsole.logrt("En la primavera se colorea el mundo.");
		break;

	case "verano":
		console.log("Las noches se hacen largas en el verano.");
		break;

	case "otoño":
		console.log("Donde había color ya no queda nada.");
		break;

	default:
		console.log("Lo ingresado no es una estación.");
		break;
}