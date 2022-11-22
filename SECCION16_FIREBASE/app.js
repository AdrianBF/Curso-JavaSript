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
    deleteBtn.className = 'material-icons secondary'
}


db.collection('tareas').orderBy('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if(cambio.type == 'added'){
            renderList(cambio.doc.data());
        }else if (cambio.type == 'removed') {
            console.log('Eliminado');
        }else if (cambio.type == 'modified') {
            console.log('Modificado');
        }
    });
});


/**
<li class="collection-item">
    <div>
        <span>Tarea 1</span>
        <i class="material-icons secondary-content">delete</i>
        <a href="#modal1" class="modal-trigger secondary-content">
        <i class="material-icons">edit</i>                    
        </a>
    </div>
</li>
 */