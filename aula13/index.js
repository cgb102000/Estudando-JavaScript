let umaString = 'Um texto ';
console.log(umaString[4]); //Captando valores dentro das strings
console.log(umaString.charAt(4)); //Também capta valores dentro de strings

//Concatenando strings sem sinais

//console.log(umaString.concat('em um caderno'));
console.log(umaString + ' em um caderno');
console.log(`${umaString} em um caderno`); //Usar templates strings sempre é a maneira mais adequada.


//Como descobrir o indice de uma string, exemplo a baixo

console.log(umaString.indexOf('texto'));

console.log(umaString.lastIndexOf('m')); //Começa a busca pelo fim do texto


//Como retornar todas as letras de sua string

console.log(umaString.match(/[a-z]/g));