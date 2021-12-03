<?php
    include('conexao/conecta.php');
    $email = $_POST['email'];
    $senha = md5($_POST['senha']);

    $select = $conexao->prepare('SELECT * from login WHERE BINARY email=:email AND BINARY senha=:senha');
    $select->bindParam(':email', $email, PDO::PARAM_STR);
    $select->bindParam(':senha', $senha, PDO::PARAM_STR);
    $select->execute();
    $login = $select->rowCount();


    if($login >0){
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $_SESSION['aulaEmail'] = $email;
        $_SESSION['aulaPass'] = $senha;

        echo 'Olá Ernold! você foi logado com sucesso!';
     } else {
         echo 'Dados inválidos';
     }
?>