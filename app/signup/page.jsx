"use client";
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Signup() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if (password !== confirmPassword) {
            setError("As senhas não são iguais");
            return;
        }

        router.push("/perfil");
    }

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
                <Input text="Senha" tipo="password" id="senha" onChange={(e) => setPassword(e.target.value)} />
                <Input text="Confirme a Senha" tipo="password" id="confirmSenha" onChange={(e) => setConfirmPassword(e.target.value)} />


                {error && <p className={styles.error}>{error}</p>}
                <button className={styles.button} onClick={handleSignup}>Cadastrar</button>
                <p className={styles.link} onClick={() => router.push("/login")}>
                    Já tem uma conta? Faça login
                </p>
            </div>
        </div>
    );
}
