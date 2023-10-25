// IMC = PESO/ALTURA²


const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento não realizado!');

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (peso) {
        console.log('ok');
        setResultado('Peso invalido');

    } else {
        console.log('erro');
    }
});


function criaP(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP;


}



