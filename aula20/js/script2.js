

function meuSegundoEscopo() {
    const form2 = document.querySelector('.form2');
    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`Formulário não foi enviado ${contador}`);

        contador++;




    }
    form2.addEventListener('submit', recebeEventoForm);


};
meuSegundoEscopo();