// let nowYear = new Date().getFullYear();
// let nombre = 'Handrian';
// let apellido = 'Barrero';
// // const ciudad = 'Tarragona';
// // const nacimiento = 1998;
// // function calcularEdad(year){
// //     return nowYear.getFullYear() - year;
// // }
// // console.log(`${nombre} ${apellido}, nacio en ${ciudad}, y tiene ${calcularEdad(nacimiento)} años.`);
// let nombreCompleto = `${nombre} ${apellido}`;

// //ES5 Arrow Function
// const years = [2000, 2005, 2008, 2012];
// var edad5 = years.map(function(el){
//     return nowYear - el
// });
// console.log(edad5);

// //ES6 Arrow Function
// let edad6 = years.map(el => nowYear - el);
// console.log(edad6);

// edad6 = years.map((el, index)=> `Edad ${index + 1}: ${nowYear - el}`);
// console.log(edad6);

// const numCuadrado = (num) => Math.pow(num,2);
// console.log(numCuadrado(5));

// const personas = [
//     {
//         nombre:'Pablo',
//         edad:25
//     },
//     {
//         nombre:'Handrian',
//         edad:24
//     },
//     {
//         nombre: 'Monica',
//         edad:23
//     }
// ];

//ES5
// const menores30 = personas.filter(function(persona){
//     return persona.edad < 25;
// });
// console.log(menores30);

//ES6
// const menores30 = personas.filter((persona) => persona.edad < 25);
// console.log(menores30);

// const persona = {
//     nombre: 'Carlos',
//     edad: 30
// }

// const {nombre, edad} = persona
// console.log(nombre);
// console.log(edad);
//  const calcMayoriaEdad = (year)=> {
//     const edad = new Date().getFullYear() - year;
//     const mayoria = edad >= 18 ? true : false;
//     return [edad, mayoria]
//  };
//  const[edad2, mayoria] = calcMayoriaEdad(2010);
//  console.log(edad2);
//  console.log(mayoria);

 /************************* 
  * MAPS
 *************************/
// const datos = new Map();
// datos.set('nombre', 'Handrian');
// console.log(datos);
// datos.set('edad', 13);
// console.log(datos);
// datos.set(1, 'handrian@god.com');
// console.log(datos.get('nombre'));
console.log(suma(10,2,3,4));

function suma(a,b,c,d){
    return a+b+c+d;
}

// var ope1 = suma(10,20,30,40);
// console.log(ope1);

var valores = [10,20,30,40];
const ope2 = suma(...valores);

console.log(ope2);

