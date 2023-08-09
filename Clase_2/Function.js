// realizar notacion camel case valorMaximo
function restar(numberOne,numbertwo){
    return numberOne - numbertwo;
}

/*
Funcion anónima
*/

const sumarDosNumeros=function(number1, number2){
    return number1 + number2;
}

console.log(sumarDosNumeros(4,7 ));

// Funcion tipo Flecha

const multiplicarDosNumeros =(n1, n2)=>{

    /*
    Recibe parametros

    */
    return n1*n2
};
console.log(multiplicarDosNumeros(10,4));

const multiDos =()=>{

    /*
    No recibe parametos
    
    */
    return 12*5
};
console.log(multiDos());

const multiTres = n1=>{

    /*
    Recibe parametros
    @param {numero a multiplicar}
    */
    return n1*10
};
console.log(multiTres(12));

//Se realiza de imediato la operación con la funcion flecha
const multiCuatro = (n1,n2)=>n1*n2;
console.log(multiCuatro(12, 20));

const operacionesMatematicas=(numberOne,numberTwo, operation)=>{
    /** 
     * @param{numero uno}numberOne
     * @param{numero dos}numberTwo
     * @param{La  funcion recibe lo que hará llamada callback function}operacion
     * 
     */
    return operation(numberOne, numberTwo)
}

console.log(operacionesMatematicas(2,5,multiCuatro))
console.log(operacionesMatematicas(2,5,sumarDosNumeros));

/* 
Arreglos

*/

let userData=['Juan', 1234, '@gmail.com'];
const userDataTwo=[{name: 'Juan', pass:1234, email:'@gmail'}];

/**
 * length       longitud(cantidad de datos)
 * index        posicion del arreglo
 * push         agregar un dato al final
 * pop          sacar el ultimo dato
 */

/**
 * Crear dos funciones tipo flecha.
 * realizar una callback function que inserte o saque un dato en un arreglo
 */

/**
 * Crear dos funciones tipo flecha.
Condiciones: 
Una de ellas debe manipular arreglos (debe hacer pop() o push()).
La segunda debe tomar dos parámetros de entrada y no usar return para regresar el resultado.
Crear una tercera función tipo flecha que sea un callback function.

Mostrar el resultado de la callback function, usando las dos funciones anteriores.
 */
//Punto Uno
let listNumber =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const insertDatelistNumber=(n1)=>{
    listNumber.push(n1);
}

const deleteDatelistNumber=(n1)=>{
    listNumber.pop(n1);
}

console.log(listNumber);

console.log(insertDatelistNumber(16));
console.log(listNumber);

//punto dos
const userDate = (name,age)=>name + ' Tiene ' + age + ' años ';
console.log(userDate('Sergio', 48));

//punto tres
const funcionCallback=(n1, insertDatelistNumber)=>{
    insertDatelistNumber(n1)
    return listNumber;
}

console.log(funcionCallback(52,insertDatelistNumber))