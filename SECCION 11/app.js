const ceviche = ['Pescado','Mariscos','Cebolla'];
const ingredientes= [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
]
// ceviche.splice(1,0,'liomn');
// console.log(ceviche);

// /******************
//  * RECORRER ARRAYS
//  ******************/
// ceviche.forEach(function(item, index){
//     console.log(`Index ${index}: ${item}`);
// });

// for(let i=0;i < ceviche.length;i++){
//     console.log(`Index ${i}: ${ceviche[i]}`);
// }

/******************************
 * BUSCAR EN ARRAY
 ******************************/
// const index = ingredientes.findIndex(function(ing, index){
//     return ing.titulo === 'cebolla';
// });

// console.log(index);
//console.log(ceviche.indexOf('pescado'));

// const buscarIngrediente = function(ingredientes, titulo){
//     const index = ingredientes.findIndex(function(ing, index){
//         return ing.titulo === titulo;
//     });
//     return index;
// }

// const filtrarIngredientes = ingredientes.filter(function(ing,index){
//     const ingredientes = ing.titulo.includes('mar');
//     return ingredientes;
// }); 
// console.log(filtrarIngredientes);
//console.log(ingredientes[buscarIngrediente(ingredientes,'pescado')]);

// const paises =['Colombia','Ecuador','Perú','España','Mexico'];
// console.log(paises.filter(pais => pais.includes('Es')));
ingredientes.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }else if (a.titulo < b.titulo){
        return -1;
    } else {
        return 0;
    }

});

console.log(ingredientes);