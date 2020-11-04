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

function valida_campos()
{
    let nome=document.getElementById('nome').value;
    let email=document.getElementById('email').value;
    let senha=document.getElementById('senha').value;

    if(nome.length > 0 && email.length > 0 && senha.length > 0)
    {
        document.getElementById("cadastro").style.visibility = "initial";
    }
    else 
    {
        document.getElementById("cadastro").style.visibility = "hidden";
    }
}