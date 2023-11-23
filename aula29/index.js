//const data = new Date();
//let diaSemana = data.getDay();


let diaSemana = 2;
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = 'Dia não encontrado';
};
console.log(diaSemana,diaSemanaTexto);



//const data2 = new Date();
//const diaSemana2 = data2.getDay();
function getDiasemanaTexto2(diaSemana2){


let diaSemanaTexto2;
const diaSemana2 = 1;   

switch (diaSemana2) {
    case 0:
        diaSemanaTexto2 = 'Domingo'
        break;
    case 1:
        diaSemanaTexto2 = 'Segunda-feira'
        break;
    case 2:
        diaSemanaTexto2 = 'Terça-feira'
        break;
    case 3:
        diaSemanaTexto2 = 'Quarta-feira'
        break;
    case 4:
        diaSemanaTexto2 = 'Quita-feira'
        break;
    case 5:
        diaSemanaTexto2 = 'Sexta-feira'
        break;
    case 6:
        diaSemanaTexto2 = 'Sábado'

}}
;

console.log(diaSemana2,diaSemanaTexto2);