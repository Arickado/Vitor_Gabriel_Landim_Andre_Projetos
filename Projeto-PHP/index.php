<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF=8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>E-letrodomésticos Comércio</title>
    <link rel="stylesheet" type="text/css" href="./css/Estilos.css">
    <script src="./js/script.js"></script>
    </head>
    <body>
        <h1 class="marca">E-letrodomésticos Comércio</h1>
        <div class="barranav">
        <a class="login"; href="./php/telalogin.php"><b>Login</b></a>
        <a class="estoque"; href="./php/estoque.php"><b>Estoque</b></a>
        <a class="cadastro"; href="./php/cadastro.php"><b>Cadastre-se aqui</b></a><br>
        </div>
        <h2 class="chamada">Bem vindo(a) aqui você irá encontrar uma seleção de produtos disponíveis em nossa loja.</h2>
        <p style="color:tan">Clique na imagem para mais opções de cada seção com detalhes de preços.</p>
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
    </body>
</html>