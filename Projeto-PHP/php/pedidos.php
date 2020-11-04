<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pedidos</title>
    <link rel="stylesheet" type="text/css" href="../css/Estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="../js/script.js"></script>
</head>
<body>
    <p><a class="voltar" href="../index.php"><b>Voltar</b></a></p>
    <div class="Div2">
    <h1 class="marca">Solicite um produto</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-4 mx-auto mt-5 pt-4 container-login">
                <form method="POST" action="./pedidosucesso.php">
                    <div class="form-group">
                        <label class="label-form" for="nomeproduto">Nome do produto:</label>
                        <input class="form-control" type="text" name="nomeproduto" id="nomeproduto">
                    </div>
                    <div class="form-group">
                        <label class="label-form" for="quant">Quantidade:</label>
                        <input class="form-control" type="text" name="quant" id="quant">
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <button class="btn btn-dark mb-3" type="submit" name="enviar" id="enviar"> Enviar </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>