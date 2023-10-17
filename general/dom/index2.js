var parrafo = document.getElementById('parrafo');

var parrafos = document.getElementsByClassName('parrafos');

parrafo.innerHTML = 'Algo,' + ' ' + parrafo.innerHTML;

for (i = 0; i < parrafos.length; i++){
    console.log(parrafos[i].innerHTML='Modificando parrafo 1 y 2');
}

let divNode = document.createElement('div');
let  pNode = document.createElement('p');

pNode.innerHTML = 'Esto es un NODO dentro de un DIV';

title.appendChild(pNode);


