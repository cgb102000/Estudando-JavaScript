//Pegando as datas do usuário, dia , hora.
const agora = new Date();
const hora = agora.getHours() ;
const minutos = agora.getMinutes();

if(hora>=0 && hora<=11){
    console.log('Bom dia!');
}   else if(hora>=12 && hora <= 17){
    console.log('Boa tarde!');
}   else if(hora>=18 && hora <=23){
    console.log('Boa noite!');
}
console.log(`Agora são exatamente ${hora}Horas e ${minutos} minutos`);

