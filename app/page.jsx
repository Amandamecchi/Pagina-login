"use client";
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import { useRouter } from "next/navigation"


export default function Registro() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/baleia.jpg" alt="Logo" />
            </div>

            <div className={styles.formularioContainer}>
                <h1 className={styles.title}>Um Nome Bem Top</h1>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
            
            <Input text="Nome" tipo="text" id="nome" />
            <Input text="Email" tipo="email" id="email" />
            <Input text="Senha" tipo="password" id="senha" />
            <button className={styles.button} onClick={() => router.push("/perfil")}>Login</button>
            <p className={styles.link} onClick={() => router.push("/login")}>
                    Já tenho uma conta
                </p>
            </div>
        </div>
    )
}