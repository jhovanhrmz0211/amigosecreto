// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputName = document.querySelector('.input-name');
const buttonAdd = document.querySelector('.button-add');
const listaNombres = [];

function agregarAmigo() {
    const nombre= inputName.value;
    listaNombres.push(nombre)
    console.log(listaNombres)
}

function sortearAmigo() {
    if(listaNombres == 0) {
        alert('Es necesario varios nombres para realizar el sorteo')
    }

    const sortearNombre = Math.floor(Math.random() * listaNombres.length)
    console.log('inprimiendo lista desde sorteo: ',listaNombres[sortearNombre])
}

