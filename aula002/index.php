<?php
    ob_start();
    session_start();
    include('conexao/conecta.php');
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/> <!-- link para poder utilizar icones externos -->
    <link rel="stylesheet" href="style/bootstrap.css"> <!-- 
    bootstrap -->
    <link rel="stylesheet" href="style/style.css"> <!-- style -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 002</title>
</head>
<body>
    <?php
        if(isset($_POST['login'])){
            $select = $conexao->prepare('SELECT * from login WHERE BINARY email=:email AND BINARY senha=:senha');
            $select->bindParam(':email', $email, PDO::PARAM_STR);
            $select->bindParam(':senha', $senha, PDO::PARAM_STR);
            $select->execute();
            $login = $select->rowCount();

                echo 'Logado com sucesso!';
            } else{
                echo 'Dados inválidos!';
            }

    ?>
    <div class="main">
        <h1>Login</h1>
        <p>Insira suas informações</p>
        <div class="box">
            <form method="post" enctype="multipart/form-data" action="login.php">

                <div class="campo">
                    <label id="lapela1"><i class="far fa-envelope"></i></label>
                    <input type="email" name ="email" id="email" placeholder="E-mail" required>
                </div>

                <div class="campo">
                    <label id="lapela2"><i class="fas fa-lock"></i></label>
                    <input type="password" name="senha" id="senha" placeholder="Senha" required>
                </div>

                <div class="login">
                    <input type="submit" id="login" name="login" value="login">
                </div>

            </form>
        </div>
    </div>

   <!-- <script type="text/javascript" src="script/script.js"></script> -->
</body>
</html>

<!-- required transforma o preenchimento da caixa como obrigatorio -->
<!-- input type submit cria um botão de envio -->
<!-- label cria uma caixa de inserimento de texto, no nosso caso Usuario e Senha -->
<!-- input type password é para caixas de senhas -->
<!-- input type text é para caixas de texto, no nosso caso o Usuário -->