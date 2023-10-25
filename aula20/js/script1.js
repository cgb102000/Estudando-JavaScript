function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert('O formulário foi enviado!');
        console.log('Enviado');
    };

};

meuEscopo();