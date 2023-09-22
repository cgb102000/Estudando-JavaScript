let umaString = 'Um texto';

// Método `search` utilizado para encontrar letras minúsculas dentro de uma string:
// console.log(umaString.search(/[a-z]/g));

// Método `search` utilizado para encontrar um caractere específico dentro de uma string:
// console.log(umaString.search(/[x]/g));

// Método `replace` utilizado para substituir uma string por outra (observe que deve ser uma correspondência exata):
// console.log(umaString.replace('Um','Outro'));
// Ou usando uma expressão regular:
// console.log(umaString.replace(/Um/,'Outro'));

let outraString = 'O rato roeu a roupa do rei de roma.';

// Método `replace` utilizado para substituir um caractere por outro único caractere:
console.log(outraString.replace(/r/, '#'));

// Método `replace` utilizado para substituir todos os caracteres correspondentes por outro caractere:
console.log(outraString.replace(/r/g, '#'));


/*Os métodos geralmente alteram o estado do objeto ou 
realizam alguma operação lógica específica com base nos dados do objeto.
*/