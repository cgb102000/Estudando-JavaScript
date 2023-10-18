function criaPessoa (nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade

    };
}

const pessoa1 = criaPessoa('Caio','Gabriel',23);
const pessoa2 = criaPessoa('Miguel','Afonso',15);
const pessoa3 = criaPessoa('João','Pedro',14);



console.log(pessoa1.nome,pessoa2.nome,pessoa3.nome);
