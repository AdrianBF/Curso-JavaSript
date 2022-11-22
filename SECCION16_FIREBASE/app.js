const lista = document.getElementById('lista-tareas');
const form = document.getElementById('add-tarea-form');
const updateBtn = document.getElementById('updateBtn');

let updateID = null;
let newTitle = '';

const renderList = (doc) => {
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id', doc.id);
    
    let div = document.createElement('div');
    let titulo = document.createElement('span');
    titulo.textContent = doc.data().titulo;

    let enlace = document.createElement('a');
    enlace.href = '#modal1';
    enlace.className = 'modal-trigger secondary-content';

    let editBtn = document.createElement('i');
    editBtn.className = 'material-icons';
    editBtn.innerText = 'edit';

    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'material-icons secondary-content';
    deleteBtn.innerText = 'delete';

    enlace.appendChild(editBtn);
    div.appendChild(titulo);
    div.appendChild(deleteBtn);
    div.appendChild(enlace);
    li.appendChild(div);

    deleteBtn.addEventListener('click',e => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('tareas').doc(id).delete();
    });

    editBtn.addEventListener('click', e => {
        updateID = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');

    });

    lista.append(li);
    
}

updateBtn.addEventListener('click', e =>{
    newTitle = document.getElementsByName('newTitle')[0].value;
    db.collection('tareas').doc(updateID).update({
        titulo: newTitle
    });
    document.getElementsByName('newTitle')[0].value = '';
});

form.addEventListener('submit',e => {
    e.preventDefault();
    if (form.titulo.value != ''){
        db.collection('tareas').add({
            titulo: form.titulo.value
        });
        form.titulo.value = '';
    }     
});

db.collection('tareas').orderBy('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if(cambio.type == 'added'){
            renderList(cambio.doc);
        }else if (cambio.type == 'removed') {
            let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
            lista.removeChild(li);
        }else if (cambio.type == 'modified') {
            let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
            li.getElementsByTagName('span')[0].textContent = newTitle;
            newTitle = '';
        }
    });
});