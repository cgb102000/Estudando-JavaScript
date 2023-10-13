let nomes = ['João', 'Caio', 'Miguel'];
nomes.unshift('Bia'); // Adicionando 'Bia' no início do array usando .unshift
console.log(nomes);
console.log(nomes[0]); // Exibe 'Bia' como o primeiro elemento

delete nomes[1]; // Podemos deletar um valor específico dentro de um array usando 'delete nome[indice]'
console.log(nomes);

nomes.push('Luiza', 'Maria');  // Adicionando 'Luiza' e 'Maria' ao final do array
console.log(nomes);  // Exibindo os valores atualizados

console.log(nomes.slice(0, 3));  // Usando .slice() para buscar valores específicos (0 a 2)

console.log(typeof(nomes)); // Verificando o tipo da variável 'nomes'

console.log(nomes instanceof Array); // Verificando se 'nomes' é um array
