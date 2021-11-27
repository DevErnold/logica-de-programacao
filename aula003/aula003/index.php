<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estilo.css?<?php echo mt_rand(1, 9999) ?>">
    <link rel="stylesheet" href="js/javascript.js">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula003</title>
</head>
<body>
    <div class="tudo">

        <h2>Conversor de temperatura</h2>
        <label>Temperatura em</label>
            <select id="seleciona-temperatura1">
                <option value="0">Kelvin</option>
                <option value="1">Fahrenheit</option>
                <option value="2">Celsius</option>
            </select>
        <input type="text" name="temperatura" id="temperatura" maxlength="4">
        <label>para</label>
            <select id="seleciona-temperatura2">
                <option value="0">Kelvin</option>
                <option value="1">Fahrenheit</option>
                <option value="2">Celsius</option>
            </select>              
        <input type="submit" name="converter" value="Converter" id="converter" onclick="enviar()">
        <div id="resultado"></div>
        <script type="text/javascript" src="js/javascript.js?<?php echo mt_rand(1, 9999) ?>"></script>

    </div>
</body>
</html>