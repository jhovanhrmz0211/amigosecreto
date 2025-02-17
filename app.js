// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputName = document.querySelector('.input-name');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
let listaNombres = [];

function agregarAmigo() {
    const nombre = inputName.value.trim();

    if (nombre === '') {
        alert('El nombre no puede estar vacío');
        return;
    }

    listaNombres.push(nombre);
    inputName.value = '';
    mostrarLista();
}

function mostrarLista() {
    listaAmigos.innerHTML = '';
    listaNombres.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = nombre;

        // Botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('button-delete');
        botonEliminar.onclick = () => eliminarNombre(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarNombre(index) {
    listaNombres.splice(index, 1);
    mostrarLista();
}

function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert('Se necesitan al menos dos nombres para hacer un sorteo.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaNombres.length);
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${listaNombres[indiceSorteado]}</strong></p>`;

    lanzarConfeti();
}

function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}


function resetLista() {
    listaNombres = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}

