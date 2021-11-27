// Definir variável caixa
let caixa = document.getElementById('caixa');

// Adicionar eventos com o mouse na variável caixa
caixa.addEventListener('click', clicar); // ao clicar, a função estabelecida será iniciada
caixa.addEventListener('mouseenter', entrar); // ao passar o mouse sobre, a função estabelecida será iniciada
caixa.addEventListener('mouseout', sair); // ao retirar o mouse, a função estabelecida será iniciada

// Criar função da variável clicar
function clicar(){
    caixa.innerHTML = 'Você clicou';
    caixa.style.background = 'green';
    caixa.style.textTransform = 'uppercase'
}

// Criar função da variável entrar
function entrar(){
    caixa.innerHTML = 'Entrou!';
    caixa.style.background = 'black';
    caixa.style.textTransform = 'uppercase'
    caixa.style.color = 'white';
}

// Criar função da variável sair
function sair(){
    caixa.innerHTML = 'Passe o mouse';
    caixa.style.background = 'Orange';
    caixa.style.color = 'black';
    caixa.style.textTransform = 'uppercase'
}

// Pegar a data atual do computador
let agora = new Date();
let diaSemana = agora.getDay();
let data = document.getElementById('data');

switch(diaSemana){
    //case 0:
        //data.innerHTML = 'Domingo';
        //data.style.background = 'black';
    //break;

    //case 1:
        //data.innerHTML = 'Segunda-feira';
        //data.style.background = 'red';
    //break;

    //case 2:
        //data.innerHTML = 'Terça-feira';
        //data.style.background = 'green';
    //break;

    //case 3:
        //data.innerHTML = 'Quarta-feira';
        //data.style.background = 'orange';
    //break

    //case 4:
        //data.innerHTML = 'Quinta-feira';
        //data.style.background = 'purple';
    //break;

    //case 5:
        //data.innerHTML = 'Sexta-feira';
        //data.style.background = 'grey';
    //break;

    //case 6:
        //data.innerHTML = 'Sabado';
        //data.style.background = 'blue';
    //break;
}

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = 'black';
} else if(diaSemana == 1){
    data.innerHTML = ('Segunda-feira');
    data.style.background = ('blue')
} else if(diaSemana == 2){
    data.innerHTML = ('Terça-feira');
    data.style.background = ('purple');
} else if(diaSemana == 3){
    data.innerHTML = ('Quarta-feira');
    data.style.background = ('red')
} else if(diaSemana == 4){
    data.innerHTML = ('Quinta-feira');
    data.style.background = ('black');
    data.style.color = ('red');
} else if(diaSemana == 5){//
    data.innerHTML = ('Sexta-feira');
    data.style.background = ('green');
} else if(diaSemana == 6){
    data.innerHTML = ('Sabado');
    data.style.background = ('grey');
} else{
    data.innerHTML = ('Data inválida');
    data.style.background = ('white');
    data.style.color = ('black');
}

let contador = 0;
let dominio = document.getElementById('dominio');

while(contador < 300){
    contador++;
    dominio.innerHTML = (dominio);
    console.log(dominio);
}


