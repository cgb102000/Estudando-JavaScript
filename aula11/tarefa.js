// Aula 11 - Tarefa: Captura de Entrada do Usuário e Exibição do Resultado

let num1 = prompt('Digite um número'); // Captura a primeira entrada do usuário como uma string.
let num2 = prompt('Digite outro número'); // Captura a segunda entrada do usuário como uma string.

num1 = Number(num1); // Converte a primeira entrada em um número usando a função Number().
num2 = Number(num2); // Converte a segunda entrada em um número usando a função Number().

const resultado = num1 + num2; // Realiza a soma dos dois números.

console.log(resultado); // Exibe o resultado da soma no console.

// Use a função 'alert()' para exibir uma mensagem pop-up com o resultado.
alert(`O resultado da sua conta foi: ${resultado}`);
