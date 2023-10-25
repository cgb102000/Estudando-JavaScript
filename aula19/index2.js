let a = 'A';

let b = a;  //Cópia

console.log(a,b);

a = 'Outra coisa';
console.log(a,b);


//Referência (Mutável) - array, object, function - Passados por referência

let c = [1,2,3];
let d = [...c]; //Colocando ...3 pontos, o valor se torna independente.
let e = d;
console.log(c,d);
c.push(4);


console.log(c,d);

d.pop();
console.log(c,d);

e.push('Luiz');
console.log(e);
