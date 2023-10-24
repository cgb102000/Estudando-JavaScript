var entrada = prompt("Digite duas expressões lógicas separadas por vírgula (true ou false):");

// Dividir a entrada em duas expressões
var expressoes = entrada.split(',');
var expressao1 = expressoes[0];
var expressao2 = expressoes[1];

// Realizar operações com operadores lógicos "short-circuit"
console.log("Expressões digitadas: " + expressao1 + " e " + expressao2);
console.log("E lógico Short-Circuit (&&): " + (expressao1 && expressao2));
console.log("OU lógico Short-Circuit (||): " + (expressao1 || expressao2));
