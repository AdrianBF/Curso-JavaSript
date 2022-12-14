//Definicion de las clases
class Libro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}

//Visual
class UI{
    static mostrarLibros(){
        const libros = Datos.traerLibros();
        libros.forEach((libro) => UI.agregarLibro(libro));
    }

    static agregarLibro(libro){
        const lista = document.querySelector('#libro-list');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        lista.appendChild(fila);
    }

    static eliminarLibro(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static mostrarAlerta(mensaje,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));
        
        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div,form);

        setTimeout(() => document.querySelector('.alert').remove(),3000);

    }

    static limpiarCampos(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#titulo').focus();
    }
}

//LocalStorage
class Datos{
    static traerLibros(){
        let libros;
        if (localStorage.getItem('libros') === null) {
            libros = [];
        } else {
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }

    static addLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros));
    }

    static removeLibro(isbn){
        const libros = Datos.traerLibros();

        libros.forEach((libro, index) => {
            if(libro.isbn === isbn){
                libros.splice(index, 1);
            }
        });
        localStorage.setItem('libros',JSON.stringify(libros));
    }
}
/*************
 * Carga de la pagina
 *************/
document.addEventListener('DOMContentLoaded',UI.mostrarLibros);

/*******************
 * Controlar evento submit
 *******************/
document.querySelector('#libro-form').addEventListener('submit',(e) =>{
    e.preventDefault();

    //Obtener Valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if (titulo === '' || autor === '' || isbn === ''){
        UI.mostrarAlerta('Por favor ingrese todo los datos','danger');
    } else {
        const libro = new Libro(titulo,autor,isbn);
        Datos.addLibro(libro);
        UI.agregarLibro(libro);
        UI.mostrarAlerta('Libro agregado a la colecci??n','success');
        UI.limpiarCampos();               
    }
});

/*********************
 * Eliminar libro
 *********************/
document.querySelector('#libro-list').addEventListener('click', (e) => {
    UI.eliminarLibro(e.target);
    Datos.removeLibro(e.target.parentElement.previousElementSibling.textContent);
    UI.mostrarAlerta('Libro eliminado','success');
});

