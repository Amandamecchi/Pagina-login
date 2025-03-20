"use client";
import './login.css';
import Input from '../../components/Input';
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="imageContainer">
                <img src="/baleia.jpg" alt="Logo" />
            </div>

            <div className="formularioContainer">
                <h1 className="title">Jubarte</h1>
                <h2 className="subtitle">Login</h2>

                <Input text="Email" tipo="email" id="email" />
                <Input text="Senha" tipo="password" id="senha" />
                <button className="button" onClick={() => router.push("/perfil")}>Entrar</button>
                <p className="link" onClick={() => router.push("/signup")}>
                    Não tem uma conta? Cadastre-se
                </p>
            </div>
        </div>
    );
}

