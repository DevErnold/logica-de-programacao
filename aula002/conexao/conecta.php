<?php
    try{
        $conexao = new PDO('mysql:host=localhost;dbname=aula-teste', 'root', '');
        $conexao ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $erro){
        echo 'Erro: ' . $erro->getMessage();
    }
?>