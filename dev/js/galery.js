
document.addEventListener('DOMContentLoaded', cargarImagenes);

function cargarImagenes() {
    const imagenes = document.querySelector('.galery__card');
    for (let i = 1; i <= 12; i++) {
        const img = document.createElement('IMG');
        img.src = `/assets/img/thumb/${i}.webp`; 
        img.dataset.imagenId = i;

        //Añadir la funciòn de mostrarImagen
        img.onclick = mostrarImagen;

        const list= document.createElement('li');
        list.appendChild(img);
        imagenes.append(list);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId)

    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `/assets/img/big/${id}.webp`

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay-fixed');

    //Botón para cerrar la imagen
    const cerrar = document.createElement('p');
    cerrar.textContent = 'X';
    cerrar.classList.add('boton-cerrar');
    overlay.appendChild(cerrar);

    //Cuando se presiona se cierra la imagen
        //Presionando la X
    cerrar.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar');
    }

    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar');
    }

    //Mostrar la imagen en el html
    const body = document.querySelector('body');

    body.appendChild(overlay);
    body.classList.add('fijar');
}