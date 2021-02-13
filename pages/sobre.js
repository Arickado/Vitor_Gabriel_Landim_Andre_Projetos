import Menu from './components/Menu';
import styles from './components/Sobre.module.css'

// Textos aparecem localmente e estilos somem ao desativar o JavaScript
function Sobre() {
    return (
        <div>
            <Menu />
            <div className={styles.sobre}>
                <h3>Processo na RecodePro</h3>
                <p>Aproveitando as ultimas entregas, gostaria de usar a oportunidade para falar sobre meu processo na Recode nesse final de 2020 e começo de 2021.</p>
                <p>Eu comecei com muita ansiosidade e ao longo do caminho isso foi crescendo, cada vez mais ansioso, novas técnologias para aprender, novos conteúdos, contatos e com tudo isso vindo de uma forma divertida de aprender e aplicar.</p>
                <p>Agora quase 6 meses concluídos eu penso nesse caminho, quanto conteúdo eu já passei e o quanto difícil é de lembrar tudo as vezes, mas fiquei aliviado quando todos os professores diziam que não era necessário decorar o conteúdo, a pesquisa está ai para isso, mas o fundamento ficou gravado.</p>
                <p>Gostaria de elogiar a equipe Recode pelo trabalho e a oportunidade incrível, antes de estar aqui eu não fazia ideia de como começar e prosseguir, mas com esse curso eu tive um caminho a seguir e apesar da pressão pessoal e ansiosidade estou comovido de ter chego até aqui.</p>
            </div>
        </div>
    );
}

export default Sobre
