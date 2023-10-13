// Exemplo 1: Arrays em JavaScript
const alunos = ['Luiz', 'Maria', 'João', 2];
console.log(alunos);
// Em JavaScript, é possível incluir números e caracteres no mesmo array.

// Exemplo 2: Acessando elementos de um array
const nomes = ['Caio', 'Miguel', 'Alex'];
console.log(nomes[0]); // Acessando o primeiro elemento
console.log(nomes[1]); // Acessando o segundo elemento
console.log(nomes[2]); // Acessando o terceiro elemento
console.log(nomes[3]); // Também é possível fazer uma busca fora do array

// Exemplo 3: Definindo a ordem específica em um array
const sobrenomes = ['Silva', 'Pereira', 'Andrade', 'Potter'];
sobrenomes.push('Salomão'); // Adicionando um valor ao final do array usando .push
sobrenomes.unshift('teste'); // Adicionando um valor no início do array
sobrenomes[0] = 'Pereira'; // Alterando o primeiro elemento
sobrenomes[1] = 'Silva'; // Alterando o segundo elemento
sobrenomes[2] = 'Andrade'; // Alterando o terceiro elemento
console.log(sobrenomes);

// Exemplo 4: Informações sobre o array
console.log('Tamanho do array sobrenomes:', sobrenomes.length); // Tamanho do array
console.log('Elemento na posição 3:', sobrenomes[3]); // Acessando o elemento na posição 3
