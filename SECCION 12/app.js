/********************************
 * LOCAL STORAGE
 ********************************/
localStorage.setItem('nombreUsuario','Handrian');
localStorage.setItem('ubicacion','SPiSP');
let nameUser = localStorage.getItem('nombreUsuario');
console.log(nameUser);
console.log(localStorage.getItem('ubicacion'));

localStorage.removeItem('nombreUsuario');
localStorage.clear();

/***********************
 * NOTACION JSON
 ***********************/
const usuario = {
    nombre: 'Handrian',
    edad:38
}

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);
// user = JSON.parse(usuarioJSON);
// console.log(user);

/**************************
 * GUARDAR OBJETO LOCALSTORAGE
 **************************/
localStorage.setItem('usuario',usuarioJSON);
const userJSON = localStorage.getItem('usuario');
const user = JSON.parse(userJSON);
console.log(`${user.nombre} tiene ${user.edad} años`)