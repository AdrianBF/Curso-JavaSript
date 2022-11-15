// var btn = document.querySelector('input[type="submit"]');
// btn.value = 'Añadir';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var impar = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i<=impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc'; 
// }

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// var nuevoDiv = document.createElement8('div');
// nuevoDiv.className = 'Hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title','Hola mundo');

// console.log(nuevoDiv);

// //createTextNode
// var nuevoNodoText = document


/************* 
 * AGREGAR ELEMENTO A LA LISTA
*************/
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

form.addEventListener('submit',agregarItem);
filtro.addEventListener('keyup',filtrarItems);

function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar'
    botonDel.appendChild(document.createTextNode('X'));
    li.appendChild(botonDel);

    lista.appendChild(li);
}

/***************** 
 * EVENTO CLICK DE LA LISTA
*****************/
lista.addEventListener('click',eliminarItem);

function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li= e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

/********************** 
 * BUSCAR ELEMENTO EN UNA LSITA
**********************/
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}
