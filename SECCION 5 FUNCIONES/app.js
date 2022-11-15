// function bienvenido(){
//     console.log('Hola bienvendio a la seccion de funciones');
// }
// //bienvenido();
// function cuadradoNumero(num){
//     return Math.pow(num, 2);
// }
// //Funcion convertir Fahrenheit a Celsius
// function convertirFAHaCelsius(gradoFah){
//     var celsius = (gradoFah - 32) * 5 / 9;
//     return celsius;
// }
// var tempUno = convertirFAHaCelsius(32);
// var tempDos = convertirFAHaCelsius(68);
// //console.log(tempUno + '\n' + tempDos);

// /**
//  * CALCULAR EDAD
//  */
// function calcularEdad(yearNacimiento){
//     return 2022 - yearNacimiento;
// }
// var edad = calcularEdad(1998);
// console.log(edad);

// /*****************************
//  * EJERCICIO CODIFICACION 3
//  *****************************/
// function faltaJubilar(yearNacimiento, nombre){
//     var edad = calcularEdad(yearNacimiento)
//     var falta;
//     if (edad < 65){
//         falta = 65 - edad;
//         console.log('A ' + nombre + ' le queda para jubilarse ' + falta + ' Años');
//     } else {
//         falta = edad - 65;
//         console.log(nombre + ' esta jubilado hace ' + falta + ' Años');
//     }
// }
// faltaJubilar(1998, 'Adrian')

/*************************
 * ARGUMENTOS POR DEFAUL
*************************/
// var sumar = function(a = 5,b = 5,c = 0){
//     return a + b + c;
// }
// console.log(sumar(10,undefined,1));

/***************************** 
 * PLANTILLAS DE TEXTO
*****************************/
// var nombre = 'Adrian';
// console.log(`El nombre es: ${nombre}.`)
// var a = 5;
// var b = 10;
// console.log(`La suma es ${a+b}.`)

/**************************************** 
 * EJERCICIO 4
****************************************/
function score(pos, neg, nombre){
    var porPos = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;
    var score;
    if (porPos >= 90){
        score = 'A';
    } else if(porPos >= 70  && porPos <= 89){
        score = 'B';
    } else if(porPos >= 45 && porPos <= 69){
        score = 'C';
    } else {
        score = 'D';
    }
    console.log(`${nombre} tiene el score ${score}. \nPositivas: ${porPos}%. \nNegativas: ${porNeg}%.`);
}
function respuestasFalladas(respuestasAcertadas, totalPreguntas){
    return totalPreguntas - respuestasAcertadas;
}
var respuestasAcertadas = 90;
var totalPreguntas = 100;
score(respuestasAcertadas, respuestasFalladas(respuestasAcertadas, totalPreguntas),'Adrian');