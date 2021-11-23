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