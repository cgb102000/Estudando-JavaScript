// Aula 11: Funções para Exibir Mensagens na Tela

// Em JavaScript, você pode usar várias funções para exibir mensagens na tela.

// window.alert() - Exibe um alerta na tela, usado para exibir informações simples.

window.alert("Hello World"); // Isso exibirá um alerta com a mensagem "Hello World".

// window.confirm() - Exibe um alerta na tela com um botão "OK" e um botão "Cancelar", usado para obter a confirmação do usuário.

const confirmacao = window.confirm('Deseja realmente apagar?');
// A função 'confirm()' retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar".

if (confirmacao) {
  console.log('A ação foi confirmada.'); // Se o usuário confirmar, essa mensagem será exibida no console.
} else {
  console.log('A ação foi cancelada.'); // Se o usuário cancelar, essa mensagem será exibida no console.
}

// window.prompt() - Exibe um alerta na tela com uma caixa de entrada para que o usuário insira dados.

const numeroDigitado = window.prompt('Digite um número:');
// A função 'prompt()' captura a entrada do usuário e a retorna como uma string.

console.log('Você digitou o número:', numeroDigitado);
