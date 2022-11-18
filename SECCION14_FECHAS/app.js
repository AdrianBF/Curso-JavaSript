const year1 = new Date(0);
const now = new Date();
const date1 = new Date("December 17, 1995 13:49:33");
console.log(year1.toString());
console.log(`Año ${now.getFullYear()} Mes ${now.getMonth() + 1} Dia ${now.getDate()}`);
console.log(`Hora: ${date1.getHours()} Minutos: ${date1.getMinutes()} Seconds: ${date1.getSeconds()}`);

/**********************
 * PRACTICA FECHAS
 **********************/
const myBird = new Date("December 21, 1998");
const nowDate = new Date();
console.log(`${myBird.getTime()} ${nowDate.getTime()}`);
if (myBird.getTime() > nowDate.getTime()) {
    console.log(`${myBird.toString()} es mayor a ${nowDate.toString()}`);
} else {
    console.log(`${nowDate.toString()} es mayor a ${myBird.toString()}`)
}
