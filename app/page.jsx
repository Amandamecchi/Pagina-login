"use client";
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter();

    return(
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>Login</h1>
                <Input text="Nome" tipo="text" id="nome"/>
                <Input text="Email" tipo="email" id="email"/>
                <Input text="Senha" tipo="password" id="senha"/>
                <button className={styles.button} onClick={() => router.push("/perfil")}>Login</button>
            </div>
        </div>
    )
}