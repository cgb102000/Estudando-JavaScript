let num1 = 1500;
let num2 = 2.5;

console.log(num1.toString() +num2);  //Convertendo números para strings
//Obs: essa conversão é apenas de retorno, não altera o valor da variável;

console.log(typeof num1);


//Também podemos modificar esse retorno para números binários, usando a sintaxe a baixo:

console.log(num1.toString(5)); //Apenas colocamos o (2) dentro do médoto;  Se você quiser que ele parece em uma espeficica casa decimal, deve colocar o número dentro dos parenteses, como o exemplo acima toString(5)


//Transformando um objeto em um número inteiro
console.log(Number.isInteger(num1));
console.log(typeof num1);


let temp1 = num2 * 'Olá';
console.log(Number.isNaN(temp1));