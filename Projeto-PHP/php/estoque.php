<?php

    require_once './actions/db_connect.php';

    session_start();

    include_once './includes/header.php';

    $sql = "select nome, preco, quant from estoque;";

    $resultado = mysqli_query($connect, $sql);


?>
    <div class="container">
        <div class="row">
            <div class="col-12">
            <table class="table table-striped table-hover">
            <tr>
                <th>Nome</th>
                <th>Preco</th>
                <th>Quantidade</th>
            </tr>
        <?php
            while($row = mysqli_fetch_assoc($resultado)){
        ?>
            <tr>
                <td>
                    <?php echo $row['nome'] ?>
                </td>
                <td>
                    <?php echo $row['preco'] ?>
                </td>
                <td>
                    <?php echo $row['quant'] ?>
                </td>
            </tr>
        <?php
            }
        ?>
    </table>
            </div>
        </div>
    </div>
    <div>
    <a class="estoque"; href="./pedidos.php"><b>Solicitar produtos</b></a>
    </div>

<?php
    include_once './includes/footer.php';
?>