function validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if(email === 'devernold2@gmail.com' && senha === 'dev75672' || email === 'ernoldfrancisco@outlook.com' && senha === 'dinho123'){
       // alert('Seja bem vindo Ernold');
       window.location.href = 'https://www.google.com'; // Se o login estiver correto com o que foi definido, ele irá para a página definida no href
    } else{
        alert('Dados inválidos!');
    }
    console.log(email, senha);
}

   // senha.addEventListener('keyup', function(event){
   //     if(event.keyCode === 13){
   //         event.preventDefault();
   //         document.getElementById('login').click();
   //     }
   // });