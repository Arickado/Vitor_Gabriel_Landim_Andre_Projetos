import Menu from './components/Menu';
import styles from './components/Home.module.css';

// Textos aparecem localmente e estilos somem ao desativar o JavaScript
function Home() {
    return (
        <div>
            <Menu />
        <div className={styles.home}>
            <h1 className={styles.h1}>Bem vindo(a) ao projeto de react-back-avançado!</h1>
            <p className={styles.p}>Clicando em Sobre você poderá ver um pequeno resumo de como me senti nessa tragetória com a RecodePro</p>
        </div>
        </div>
    );
}

export default Home;
