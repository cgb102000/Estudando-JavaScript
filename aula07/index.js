// Aula 07: Tipos de Variáveis em JavaScript

// JavaScript suporta diferentes tipos de variáveis, incluindo strings, números, undefined, nulo e booleanos.

const nome = 'Caio'; // String
const nome1 = "Caio"; // String
const nome2 = `Caio`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined -> Não aponta para nenhum local na memória.
let sobrenomeAluno = null; // Nulo -> Não aponta para local nenhum na memória.

const aprovado = true; // Boolean (lógico)
const reprovado = false; // Boolean (lógico)

// Arrays também são suportados em JavaScript. Eles podem conter uma coleção de valores.

const a = [1, 2];
const b = a; // 'b' agora aponta para a mesma matriz que 'a'.
console.log(a, b); // Isso exibirá [1, 2] duas vezes, pois 'a' e 'b' compartilham a mesma referência à matriz.
