// 012345678910


//                0   ,     1   ,   2   ,   3
const alunos = ['Luiz', 'Maria', 'João',2];
console.log(alunos);
//No javascript podemos colocar números e caracteres no mesmo array.



const nomes = ['Caio', 'Miguel', 'Alex'];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //Também podemos fazer uma busca fora do array


//Podemos também definir a ordem especifica:
const sobrenomes = ['Silva', 'Pereira', 'Andrade','Potter'];
sobrenomes.push('Salomão'); //Podemos adicionar um valor a mais, usando o .push: Push adiciona ao fim do array
sobrenomes.unshift('teste');
sobrenomes[0] = 'Pereira'; //alterando
sobrenomes[1] = 'Silva'; //alterando
sobrenomes[2] = 'Andrade'; //alterando
console.log(sobrenomes);




console.log(sobrenomes.length);

console.log(sobrenomes[3]);

