const pessoa = {
    nome:'Luiz',
    sobrenome:'Miranda',
    idade:'30 anos',
    endereco:{
        rua:'Av Brasil',
        numero: 320
    }


};

const {nome:nome = '', sobrenome, idade} = pessoa;
console.log(nome,sobrenome,idade)