var entrada = prompt("Digite dois valores separados por vírgula (ex: 5,10):");

// Dividir a entrada em dois valores
var valores = entrada.split(',');
var valor1 = parseFloat(valores[0]);
var valor2 = parseFloat(valores[1]);

// Realizar comparações
console.log("Valores digitados: " + valor1 + " e " + valor2);
console.log("Igual (==): " + (valor1 == valor2));
console.log("Não Igual (!=): " + (valor1 != valor2));
console.log("Estritamente Igual (===): " + (valor1 === valor2));
console.log("Estritamente Não Igual (!==): " + (valor1 !== valor2));
console.log("Maior que (>): " + (valor1 > valor2));
console.log("Maior ou Igual (>=): " + (valor1 >= valor2));
console.log("Menor que (<): " + (valor1 < valor2));
console.log("Menor ou Igual (<=): " + (valor1 <= valor2));
