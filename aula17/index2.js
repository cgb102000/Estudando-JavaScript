function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); // Chame a função soma e imprima o resultado diretamente

function soma2(a = 1, b = 1) {
    const resultado2 = a + b;
    return resultado2;
}

const resultado2 = soma2(4, 2);
console.log(resultado2);
