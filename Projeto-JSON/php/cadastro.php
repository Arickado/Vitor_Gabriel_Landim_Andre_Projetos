<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="stylesheet" type="text/css" href="../css/Estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="../js/script.js"></script>
</head>
<body>
    <p><a class="voltar" href="../index.php"><b>Voltar</b></a></p>
    <div class="Div2">
    <h1 class="marca">Faça o seu cadastro em nossa loja</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-4 mx-auto mt-5 pt-4 container-login">
                <h3 class="mb-4">Cadastro</h3>
                <form method="POST" action="./actions/cadastrar.php">
                    <div class="form-group">
                        <label class="label-form" for="nome">Nome:</label>
                        <input class="form-control" type="text" name="nome" id="nome" onkeyup="valida_campos()">
                    </div>
                    <div class="form-group">
                        <label class="label-form" for="email">Email:</label>
                        <input class="form-control" type="email" name="email" id="email" onkeyup="valida_campos()">
                    </div>
                    <div class="form-group">
                        <label class="label-form" for="senha">Senha:</label>
                        <input class="form-control" type="password" name="senha" id="senha" onkeyup="valida_campos()">
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <button class="btn btn-success mb-3" type="submit" name="cadastrar" id="cadastro"> Cadastrar </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php
    include_once './php/includes/footer.php';
?>