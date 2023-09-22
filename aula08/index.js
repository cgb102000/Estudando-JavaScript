// Aula 08: Operadores Aritméticos em JavaScript

/*
   Em JavaScript, você pode usar operadores aritméticos para realizar cálculos matemáticos. Alguns dos operadores aritméticos mais comuns incluem:

   *   + Adição/Concatenação
   *   ** Potenciação
   *   % Resto da divisão
   *   - Subtração
   *   / Divisão
*/

const num1 = 5; // Aqui criamos uma constante 'num1' com o valor 5.
const num2 = '10'; // Aqui criamos uma constante 'num2' com o valor '10' (string).

console.log(num1 + num2); // Isso concatenará as duas variáveis e exibirá '510' no console.

// Observe que a concatenação ocorre porque 'num1' é um número e 'num2' é uma string. JavaScript tenta converter tipos automaticamente.

// Se você deseja realizar uma adição matemática, certifique-se de que ambas as variáveis sejam números.

console.log(num1 + Number(num2)); // Isso converterá 'num2' em um número e somará corretamente, exibindo '15' no console.
