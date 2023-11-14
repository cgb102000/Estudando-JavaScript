/* =====IF COMUM=====  
if (pontuacaoUsuario>=1000){
    console.log('Usuário VIP');
} else{
    console.log('Usuário normal');
}
*/


//=====IF CURTO(OPERAÇÃO TERNÁRIA)=====

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario>=1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';   //Fallback, utilizado como segunda alternativa, quando o primeiro valor é nulo
