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
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura)

    if (!peso) {
        setResultado('Peso inválido', false);
        return;


    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    console.log(imc);

});
function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3'];

    if (imc >= 39.9) {
        return nivel[5];

    } if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }

    /*
<18,5 = ABAIXO DO PESO
>18.5 && <24,9 = PESO NORMAL
>=25 && <=29.9 = SOBREPESO
>=30 && <=34,9 = OBESIDADE 1
>=35 && <=39,9 = OBESIDADE 2 
>40 = OBESIDADE 3
*/
}
function getImc(peso, altura) {
    const imc = peso / altura ** 2;

    return imc.toFixed(2);
}
function criaP(className) {
    const p = document.createElement('p');
    //p.classList.add(className);
    //p.innerHTML = 'Qualquer coisa';  //Texto que será criado no <p>
    return p;

};

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //Texto que será criado no <p>
    //resultado.appendChild(p);
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);


};
