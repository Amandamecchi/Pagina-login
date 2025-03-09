import styles from '../styles/Home.module.css';
import Input from '../components/Input';

export default function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>Login</h1>
                <Input text="Nome" tipo="nome" id="nome"/>
                <Input text="Email" tipo="email" id="email"/>
                <Input text="Senha" tipo="password" id="senha"/>
                <button className={styles.button}>Entrar</button>
            </div>
        </div>
    )
}