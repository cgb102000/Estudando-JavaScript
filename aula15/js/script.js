// Transformando um ID HTML em uma variável

// Capturando um número digitado pelo usuário
let numero = Number(prompt('Digite um número:'));

// Acessando elementos HTML por ID e armazenando em variáveis
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

// Atualizando o conteúdo dos elementos HTML com o valor do número
numeroTitulo.innerHTML = numero; // Mostra o número em 'numero-titulo'

// Realizando operações matemáticas e atualizando elementos HTML com os resultados
texto.innerHTML = `<p> Seu número + 2 é ${numero + 2} </p>`; // Calcula e mostra o número + 2 em 'texto'

const tipo = document.getElementById('tipo');
tipo.innerHTML = `<p>Raiz quadrada ${numero ** 0.5}  </p>`; // Calcula a raiz quadrada e mostra em 'tipo'

const inteiro = document.getElementById('inteiro');
inteiro.innerHTML = `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`; // Verifica se é um número inteiro e mostra o resultado em 'inteiro'

const eNan = document.getElementById('eNan');
eNan.innerHTML = `<p> ${numero} é NaN: ${Number.isNaN(numero)} </p>`; // Verifica se é NaN (não é um número) e mostra o resultado em 'eNan'

const arredondandoBaixo = document.getElementById('arredondandoBaixo');
arredondandoBaixo.innerHTML = `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`; // Arredonda para baixo e mostra o resultado em 'arredondandoBaixo'

const arredondandoCima = document.getElementById('arredondandoCima');
arredondandoCima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`; // Arredonda para cima e mostra o resultado em 'arredondandoCima'

const casasDecimais = document.getElementById('casasDecimais');
casasDecimais.innerHTML = `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`; // Formata o número com duas casas decimais e mostra o resultado em 'casasDecimais'

