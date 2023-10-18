const a = {
    nome: 'Caio',
    sobrenome: 'Gabriel'
};

const b = {...a};



a.nome = 'Luiz'
console.log(b);
console.log(a);