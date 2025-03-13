"use client";
import styles from '../signup/signup.css';
import Input from "../../components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div className="container">
            <div className={styles.formularioContainer}>
                <h1 className={styles.title}>Jubarte</h1>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <Input text="Nome" tipo="text" id="nome" />
                <Input text="Email" tipo="email" id="email" />
                <Input text="Senha" tipo="password" id="senha" onChange={(e) => setPassword(e.target.value)} />
                <Input text="Confirme a Senha" tipo="password" id="confirmSenha" onChange={(e) => setConfirmPassword(e.target.value)} />


                {error && <p className={styles.error}>{error}</p>}
                <button className={styles.button} onClick={handleSignup}>Cadastrar</button>

            </div>
        </div>
    );
}