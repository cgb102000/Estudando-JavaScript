const hora = 50;

if(hora>=0 && hora<=11){
    console.log('Bom dia!');
}   else if(hora>=12 && hora <= 17){
    console.log('Boa tarde!');
}   else if(hora>=18 && hora <=23){
    console.log('Boa noite!');
}   else{
    console.log('Olá.')  
}



const tenhoGrana = true;
if(tenhoGrana){
    console.log('Vou sair de casa');

}   else {
    console.log('Não vou sair de casa');
}

//podemos usar condições sem else if, usando apenas if e else, também podemos usar apenas o if;
//Sempre que usarmos else, precisamos de um if antes;
//Podemos ter apenas um else no bloco;
