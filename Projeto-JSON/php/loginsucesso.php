<?php
    session_start();

    if(isset($_SESSION['id'])){

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8"/>
<title>Usuario logado</title>
<link rel="stylesheet" type="text/css" href="../css/Estilos.css">
</head>
<body>
    <h3 align="center"; style="color: #99D3DF;">Usuario logado com sucesso, volte para página inicial e boas compras.</h3>
    <p align="center"><a class="voltar" href="../index.php"><b>Voltar</b></a></p>
<?php
    include_once './php/includes/footer.php';
?>

<?php
   } else {
        header("Location: ../index.php");
    }
?>