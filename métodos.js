// Aula 12: Métodos de Manipulação de Strings em JavaScript

// Em JavaScript, você pode usar vários métodos para manipular strings. Vamos explorar alguns deles:

let umaString = 'Um texto';

// Método `search` é usado para encontrar letras minúsculas dentro de uma string:
// console.log(umaString.search(/[a-z]/g));

// Método `search` é usado para encontrar um caractere específico dentro de uma string:
// console.log(umaString.search(/[x]/g));

// Método `replace` é usado para substituir uma string por outra (observe que deve ser uma correspondência exata):
// console.log(umaString.replace('Um','Outro'));
// Ou usando uma expressão regular:
// console.log(umaString.replace(/Um/,'Outro'));

let outraString = 'O rato roeu a roupa do rei de roma.';

// Método `replace` é usado para substituir um caractere por outro único caractere:
console.log(outraString.replace(/r/, '#'));

// Método `replace` é usado para substituir todos os caracteres correspondentes por outro caractere:
console.log(outraString.replace(/r/g, '#'));

// Métodos para alterar o caso de uma string:

console.log(umaString.toUpperCase()); // Converte a string para maiúsculas.

console.log(umaString.toLowerCase()); // Converte a string para minúsculas.

/*
   Os métodos geralmente alteram o estado do objeto ou realizam alguma operação lógica específica com base nos dados do objeto.
*/
