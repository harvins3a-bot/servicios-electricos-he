<script>
const imagenes = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const imagenGrande = document.getElementById('imagenGrande');
const cerrar = document.querySelector('.cerrar');
const siguiente = document.querySelector('.siguiente');
const anterior = document.querySelector('.anterior');

let indiceActual = 0;

function mostrarImagen(indice){
    imagenGrande.src = imagenes[indice].src;
}

imagenes.forEach((imagen, index) => {
    imagen.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        indiceActual = index;
        mostrarImagen(indiceActual);
    });
});

siguiente.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
});

anterior.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

cerrar.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});
</script>
