<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/Estilos.css">
    <title>Login</title>
</head>
<body>
    <p><a class="voltar" href="../index.php"><b>Voltar</b></a></p>
    <div class="container">
        <div class="row">
            <div class="col-4 mx-auto mt-5 pt-4 container-login">
                <h3 class="mb-4">Login</h3>
                <form method="POST" action="./actions/login.php">
                    <div class="form-group">
                        <label class="label-form" for="email">Email:</label>
                        <input class="form-control" type="email" name="email" id="email">
                    </div>
                    <div class="form-group">
                        <label class="label-form" for="senha">Senha:</label>
                        <input class="form-control" type="password" name="senha" id="senha">
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <button class="btn btn-primary mb-3" type="submit" name="logar"> Entrar </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>