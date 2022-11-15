class Persona {
    constructor(nombre, edad, profesiones=[]) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}. Profesiones: `;

        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}`;
        });

        return biografia;
    }

}

class Empleado extends Persona {
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo= sueldo;
    }

    getBiografia(){
        return super.getBiografia() + ` Sueldo: ${this.sueldo}, Puesto: ${this.puesto}`;
    }

}

const persona1 = new Empleado('Pablo', 30,['Doctor'], 3000, 'Doctor');
const persona2 = new Persona('Carlos', 28,['Barrendero, Piloto']);
const persona3 = new Persona('Ana', 25,['Astronauta, Ingeniera']);

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

