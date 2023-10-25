var entrada = prompt("Digite duas condições separadas por vírgula (true ou false):");

// Dividir a entrada em duas condições
var condicoes = entrada.split(',');
var condicao1 = condicoes[0] === "true";
var condicao2 = condicoes[1] === "true";

// Realizar operações com operadores lógicos
console.log("Condições digitadas: " + condicao1 + " e " + condicao2);
console.log("E lógico (&&): " + (condicao1 && condicao2));
console.log("OU lógico (||): " + (condicao1 || condicao2));
console.log("NÃO lógico (!) para a primeira condição: " + !condicao1);
console.log("NÃO lógico (!) para a segunda condição: " + !condicao2);
