//Arrendondando números para baixo
let num1= 9.54578;
let num2 = Math.floor(num1);
console.log(num2);    //=9


//Arredondando números para cima 
let num3 = Math.ceil(num1);
console.log(num3);  //=10



//Arredonda o número para o valor mais próximo
let num4 = Math.round(num1);
console.log(num4);

//Buscando o maior número dentro de uma variável
let num5 = 9.49;
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//Buscando números aleatórios dentro de uma variável
const aleatorio = Math.random() * (10 - 5) + 5 ;

console.log(aleatorio);




//Pegando a raiz de qualquer número
let numRaiz = 81;
console.log(numRaiz ** (1/2));
//Também podemos utilizar assim:
console.log(numRaiz ** 0.5);
