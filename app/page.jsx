"use client";
import { useEffect } from "react";
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter();


    //arrumar esso aqui depois
    //não era para o tempo passar sozinho era pra passar depois
    useEffect(() => {
        setTimeout(() => {
            router.push("/signup");
        }, 5000);
    } , [router]);

    //return (
     //   <div className={styles.container}>
      //  <h1>carregandooo</h1>
    //    </div>
  //  )

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/baleia.jpg" alt="Logo" />
            </div>

            <div className={styles.formularioContainer}>
                <h1 className={styles.title}>Jubarte</h1>
                <h2 className={styles.subtitle}>Login</h2>
            
            <Input text="Email" tipo="email" id="email" />
            <Input text="Senha" tipo="password" id="senha" />
            <button className={styles.button} onClick={() => router.push("/perfil")}>Entrar</button>
            <p className={styles.link} onClick={() => router.push("/signup")}>
                    Não tem uma conta? Cadastre-se
                </p>
            </div>
        </div>
    )
}