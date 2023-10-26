/*
<18,5 = ABAIXO DO PESO
>18.5 && <24,9 = PESO NORMAL
>=25 && <=29.9 = SOBREPESO
>=30 && <=34,9 = OBESIDADE 1
>=35 && <=39,9 = OBESIDADE 2 
>40 = OBESIDADE 3
*/

//CAPTURAR O EVENTO DE SUBMIT DO FORMULÁRIO;
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento não realizado !');
    setResultado('Texto criado com sucesso!');

});

function criaP(className){
    const p = document.createElement('p');
    //p.classList.add(className);
    //p.innerHTML = 'Qualquer coisa';  //Texto que será criado no <p>
    return p;

};

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //Texto que será criado no <p>
    //resultado.appendChild(p);
    const p = criaP;

};
