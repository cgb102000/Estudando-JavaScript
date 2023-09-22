// Aula 10: Incremento, Decremento e Conversões de Variáveis

const passo = 50; // Aqui criamos uma constante 'passo' com o valor 50.
let contador = 0; // Inicializamos uma variável 'contador' com o valor 0.

contador += passo; // Isso é um incremento, 'contador' agora é igual a 'contador + passo'.

/*
   Em JavaScript, você pode usar operadores de incremento e decremento:
   * Incremento: ++
   * Decremento: --
*/

// Convertendo variáveis de strings em números inteiros usando 'parseInt()'

const num1 = 10; // Variável num1 contém um número inteiro.
const num2 = parseInt('5'); // 'parseInt()' converte uma string em um número inteiro.
console.log(num1 + num2); // Isso exibirá a soma dos dois números: 15
console.log(typeof num2); // 'typeof' mostra o tipo da variável, que será 'number'.

// Convertendo variáveis de strings em números decimais usando 'parseFloat()'

const num3 = 10.2; // Variável num3 contém um número decimal.
const num4 = parseFloat('5'); // 'parseFloat()' converte uma string em um número decimal.
console.log(num3 + num4); // Isso exibirá a soma dos dois números: 15.2
console.log(typeof num4); // 'typeof' mostra o tipo da variável, que será 'number'.
