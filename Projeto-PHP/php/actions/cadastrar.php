<?php

require_once "db_connect.php";

if(isset($_POST['cadastrar'])){
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "insert into usuario values (null, '$nome', '$email', '$senha');";

    mysqli_query($connect, $sql);

    header("Location: ../../cadastro concluido.html");
}

?>