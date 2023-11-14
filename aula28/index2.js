const data = new Date();

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1); //Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('diaSeamana', data.getDay()); //0-Domingo, 6-Sábado

console.log(data.toString());

console.log(Date.now()); //Milisegundos desde 1 de janeiro de 1970 (timestamp)

function zeroAesquerda(numero){
    return numero >=10 ? numero : `0${numero}`;
}


function formataData(data){
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth())+1;
    const ano = zeroAesquerda(data.getFullYear()); 
    const hora = zeroAesquerda(data.getHours());
    const minuto = zeroAesquerda(data.getMinutes());
    const segundo = zeroAesquerda(data.getSeconds());  
    const Milisegundo = zeroAesquerda(data.getMilliseconds());
    const diaSeamana    = zeroAesquerda(data.getDay());
    return `dia ${dia}/${mes}/${ano} hora ${hora}:${minuto}:${segundo}`

   
   
}
formataData(data);
const dataBrasil = formataData(data);
console.log(dataBrasil);
