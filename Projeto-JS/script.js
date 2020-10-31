function mostra_produto(div)
{
    let legenda = div.getElementsByClassName("legenda")[0];
    legenda.style.visibility = "initial";
}

function esconde_produto(div)
{
    let legenda = div.getElementsByClassName("legenda")[0];
    legenda.style.visibility = "hidden";
}

function confirma(div)
{
    let titulo = div.getElementsByClassName("titulo")[0].innerHTML;
    return confirm("Voce selecionou a pagina " + titulo);
}