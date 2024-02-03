const hoje = new Date();
console.log(hoje);
const pegarData = document.body.getElementsByClassName('hoje');
pegarData.innerHTML="Data atual:"+pegarData.toLocaleString();