// /*Operadores
// */
// var edadGrover, edadPablo, diferenciaEdad, sumaEdades, yearActual, yearGrover, yearPablo;

// edadGrover = 34;
// edadPablo = 28;
// yearActual = new Date().getFullYear(); //2019;

// diferenciaEdad = edadGrover - edadPablo;
// sumaEdades = edadGrover + edadPablo;
// yearGrover = yearActual - edadGrover;
// yearPablo = yearActual - edadPablo;

// console.log(diferenciaEdad);
// console.log(sumaEdades);
// console.log(yearActual)
// console.log("Año en el que nacio Grover: " + yearGrover);
// console.log("Año en el que nacio Pablo: " + yearPablo);

// //Operadores Logicos
// var mayorGrover = edadGrover == edadPablo;
// console.log(mayorGrover);

// //Operador TypeOF
// console.log(typeof yearActual);
// console.log(typeof mayorGrover);

//Operador Incremento y Decremento (Unarios Aritmeticos)
// ++ Incremento
// -- Decremento
// var edadCarmen = 18;
// var edadMaria = 14;
// ++  edadCarmen
// console.log(edadCarmen)

// //Operador Asignacion
// //=
// var a = 5;
// var b = 18;

// a += b
// a -= b
// a *= b
// a /= b
// var c;
// c = a % b;
// a %=b;

// console.log(c);
// console.log(a);

//-------------------------------Calcular IMC EJERCICIO.-------------------------------
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var IMCLuis = pesoLuis / Math.pow(alturaLuis,2);
var IMCCarlos = pesoCarlos / Math.pow(alturaCarlos,2);

console.log("El IMC de Luis es de: " + IMCLuis + "\nEl IMC de Carlos es de: " + IMCCarlos)

var mayorCarlosIMC = IMCCarlos > IMCLuis

if (mayorCarlosIMC) 
    console.log("El IMC de Carlos es MAYOR")
else
    console.log("El IMC de Luis es MAYOR")


