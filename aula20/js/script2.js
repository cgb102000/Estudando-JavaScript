// Função que lida com o envio do formulário
function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário
        alert('O formulário foi enviado!'); // Exibe um alerta
        console.log('Enviado'); // Registra no console que o formulário foi enviado
    };
}

meuEscopo(); // Chama a função

// Função para coletar os dados do usuário e exibi-los
function meuSegundoEscopo() {
    const form2 = document.querySelector('.form2');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    let contador = 1;

    function recebeEventoForm(evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos de entrada
        const nome = form2.querySelector('.nome').value;
        const sobrenome = form2.querySelector('.sobrenome').value;
        const peso = form2.querySelector('.peso').value;
        const altura = form2.querySelector('.altura').value;

        // Registra os valores no console
        console.log(nome, sobrenome, peso, altura);

        // Adiciona os dados do usuário ao array 'pessoas'
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        // Exibe os dados do usuário no elemento HTML 'resultado'
        resultado.innerHTML += `<p>${nome} ${sobrenome}, ${peso} kg, ${altura} cm</p>`;

        // Registra no console que o formulário não foi enviado
        console.log(`Formulário não foi enviado - Contador: ${contador}`);
        contador++;
    }

    // Adiciona um ouvinte de evento para o evento 'submit' do formulário
    form2.addEventListener('submit', recebeEventoForm);
}

meuSegundoEscopo(); // Chama a função

    
