import { useState, useEffect} from 'react';

import Produto from '../components/Produto'
import { Container, Row } from 'react-bootstrap'

export default function Produtos() {
    const [ produtos, setProdutos ] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const resposta = await fetch("https://arickado.github.io/API/produtos.json")
        const dados = await resposta.json()
        setProdutos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} preco={item.preco} descricao={item.descricao} />)}
            </Row>
        </Container>
    )
}