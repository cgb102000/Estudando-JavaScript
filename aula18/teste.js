const pessoa1 = {
    nome:'Caio',
    sobrenome:'Gabriel',
    idade:23,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    incrementaIdade(){
        ++this.idade;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
