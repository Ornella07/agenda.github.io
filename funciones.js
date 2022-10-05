// creamos funcion. DB es el localstorag, setItem es la funcion donde vamos a guardar algo. 
//JSON.stringify lo que hace es tomar un objet y lo pasa a string
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id,JSON.stringify(contacto));
    window.location.href = '/index.html'; //despues de guardarlo hace una redireccion  recargar la pagina
}

//funcion para cargar contactos
const cargarContactos = (db,parentNode) =>{
    let claves = Object.keys(db);//recuperamos contactos de la base de datos por la key.
        for(clave of claves){
         let contacto =JSON.parse(db.getItem(clave));//tranformamos para poder acceder a sus propiedades para poderlas mostrar
            crearContacto(parentNode,contacto, db);
    }

}
const crearContacto = (parentNode,contacto, db) => {
//añadimos elementos
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    //añadimos contenido
    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

//añadimos Clases
    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-icons','icono');

    //boton de borrar
    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id);
        window.location.href = '/';
    }


//añadimos al hijo que toca
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);


//añadimos al nodo padre
    parentNode.appendChild(divContacto);
}


