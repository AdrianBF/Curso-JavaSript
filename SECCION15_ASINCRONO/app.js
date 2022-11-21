
// setTimeout(function(){
//      console.log('Esto aparece despues de 3 seg.')
// }, 3000)

// //JavaScript Asincrono
// const primero = () => {
//     console.log('Inicio de primero');
//     segundo()
//     console.log('Fin de primero');
// }

// const segundo = () => {
//     setTimeout(() =>{
//         console.log('Llamada a segundo');
//     }, 2000);
// }

// primero();

// const getUsuarios = () => {
//     setTimeout(() => {
//         const userIDs = [101,102,103,105];
//         console.log(userIDs);

//         setTimeout((id) =>{
//             const usuario = {
//                 email:'grover@gmail.com',
//                 nombre:'Grover'
//             }
//             console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

//             setTimeout((idPermiso) => {
//                 const permisos = ['admin','creador'];
//                 console.log(permisos)
//             }, 1500, userIDs[2]);

//         }, 1500, userIDs[1]);

//     }, 1500);
// }

// getUsuarios();

/**************** 
 * PROMESAS
****************/

// //Ejemplo 1
// let promesa = new Promise((resolve, reject) => {
//     if (false){
//         resolve('La operacion fue exitosa');
//     } else {
//         reject('Hubo un error');
//     }
// });

// promesa.then( response => console.log('Response: ' + response))
//     .catch(error => console.log('Erorr: ' + error));

// //Ejemplo 2
// let miPromesa = Promise.resolve('Comida');
// miPromesa.then(resp => console.log(resp));

// //Ejemplo 3
// let miPromesa2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(4), 2000);
// })

// miPromesa2.then(resp => console.log(resp + 5));

const getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response([101, 102, 103, 105]);
    }, 3000);
});

const getusuario = userID =>{
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email:'grover@gmail.com',
                nombre:'Grover'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        },3000, userID)
    })
}

const getPermisos = id => {
    return new Promise((resolve,reject) => {
        setTimeout((id) => {
            const permisos = ['admin','creador'];
            resolve(permisos);
        }, 3000, id)
    })
}

//Funcion con Async/Await
async function getUsuariosAW() {
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const user = await getusuario(IDs[3]);
    console.log(user);
    const per = await getPermisos(user.id);
    console.log(per);
    return user;

}

getUsuariosAW().then(result => console.log(result)).catch(error => console.log(error));

// getUsuariosIDs.then(IDs => {
//     console.log(IDs);
//     return getusuario(IDs[3]);
// }).then(usuario => {
//     console.log(usuario);
//     return getPermisos(usuario.id)
// }).then(permisos => {
//     console.log(permisos);
// }).catch(() => console.log('error'))