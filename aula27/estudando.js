/*const idadeUsuario = prompt('Digite sua idade');



if(idadeUsuario<=18){
    const idade = document.getElementById("resposta");
    idade.innerHTML = 'Você não pode beber';
    
    
   //console.log('Você não pode beber');
} else console.log('Sirva-se');
*/

//=====IF CURTO(OPERAÇÃO TERNÁRIA)=====
const idadeUsuario2 = prompt('Digite sua idade');
const idade2 = document.getElementById("resposta2");
const resposta = idadeUsuario2 <=18 ? 'Você não pode beber' : 'Sirva-se';
idade2.innerHTML = resposta;