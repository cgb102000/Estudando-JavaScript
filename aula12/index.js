let varA = 'a'; //B
let varB = 'b'; //C
let varC = 'c'; //A

/* Uma das formas de fazer isso
const temp = varA;
varA = varB;
varB = varC;
varC = temp;
*/

[varA,varB,varC] = [varB,varC,varA];
console.log(varA,varB,varC);


