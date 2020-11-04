<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="./css/Estilos.css">
    <script src="./js/script.js"></script>
    <title>E-letrodomésticos Comércio</title>
    </head>
    <body>
        <h1 class="marca">E-letrodomésticos Comércio</h1>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
                <a class="login"; href="./php/telalogin.php"><b>Login</b></a>
                <a class="estoque"; href="./php/estoque.php"><b>Estoque</b></a>
                <a class="cadastro"; href="./php/cadastro.php"><b>Cadastre-se aqui</b></a>
            </div>
        </nav>
    <div class="container">
        <h2 class="chamada">Bem vindo(a) aqui você irá encontrar uma seleção de produtos disponíveis em nossa loja.</h2>
        <p style="color:tan">Selecione um produto para mais opções de cada seção com detalhes de preços.</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div onclick="confirma(this);" class="produtos li menu">
                    <a href="Airfryer.html" onclick="return confirm('Voce selecionou a pagina Air Fryers')">
                        <img src="./imagens/AirFryer1.png"><b><p>Air Fryers</p></b></a>
                </div>
                <div onclick="confirma(this);" class="produtos li menu">
                     <a href="Geladeiras.html" onclick="return confirm('Voce selecionou a pagina Geladeiras')">
                         <img src="./imagens/Geladeira 1.png"><b><p>Geladeiras</p></b></a>
                 </div>
                <div class="produtos li menu">
                    <a href="torradeiras.html" onclick="return confirm('Voce selecionou a pagina Torradeiras')">
                          <img src="./imagens/Torradeira 1.png"><b><p>Torradeiras</p></b></a>
                  </div>
            </div>
        </div>
    </div>
<?php
    include_once './php/includes/footer.php';
?>