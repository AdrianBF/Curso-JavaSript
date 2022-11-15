/******************
 * ARREGLOS EN JAVASCRIPT
 ******************/
// var nombre = ['Pablo','Carlos','Ana','Teresa'];
// var vegetales = new Array('Tomate','Lechuga','Zanahoria');
// console.log(nombre[1]);
// console.log(vegetales[0]);
// nombre[1]= 'Adrian';
// console.log(nombre[1] + nombre.length);

/************************** 
 * OPERACIONES CON ARREGLOS
**************************/
// var frutas = ['Pera', 'Manzana','Uva','Sandia'];
// console.log(frutas);
// for (var i=0;i<=frutas.length - 1;i++){
//     console.log(frutas[i]);
// }
// frutas.forEach( function (elemento, indice, array){
//     console.log(elemento, indice);
// });
// frutas.push('Naranja');
// console.log(frutas);
// frutas.unshift('Fresa');
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);
// var pos = frutas.indexOf('Uva');
// console.log(pos);
// frutas.splice(1,2);
// console.log(frutas);


/****************************************** 
 *  ARREGLO CON ELEMENTOS DE DIFERENTES TIPOS
******************************************/
// var persona = ['Pablo','Vasquez',34,'669668667',1.75];
// console.log(persona);


/********************************************** 
 * OBJETOS LITERALES
**********************************************/

// console.log(persona.apellido);
// console.log(persona['trabajo']);

// persona.esCasado = false;
// console.log(persona.esCasado);

/************************************************ 
 * OBJETOS CON LA SINTAXIS OBJECT
************************************************/
// var persona2 = new Object();
// persona2.nombre='Ana';
// persona2.apellido = 'Pinedo';
// persona2['trabajo'] = 'webDeveloper';
// console.log(persona2);

/*********************** 
 * OBJETOS Y METODOS
***********************/
var persona = {
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos:['Futbol','Peliculas','Ingles'],
    trabajo:'Instructor',
    esCasado: true,
    yearNacimiento: 1985,

    calcularEdad: function(){
        this.edad = 2022 - this.yearNacimiento;
    }
};

persona.calcularEdad();
console.log(persona);