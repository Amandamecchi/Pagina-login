"use client";

import { useRouter } from 'next/navigation';
import styles from './perfil.css';
import Card from '../../components/Card'; // Caminho corrigido

export default function Perfil() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="perfil">
                <div className="image">
                    <img src="/foto-formal.jpeg" alt="Perfil" />
                </div>
                <Card title="Amanda Gomes Mechi" />
                <Card text="Estudante da rede Sesi Senai - Valinhos" />
                <Card text="Desenvolvedora de Software" />
                <Card text="🎂 27/03/2008 " />
                <Card text="🦁 + ✂ = 🐱" />
                <Card text="2 TDS-1" />
                <Card text="16 anos" />
                <div className="competencias">
                    <img src="nodejs.png" alt="nodejs" />
                    <img src="html.png" alt="html" />
                    <img src="css.png" alt="css" />
                    <img src="postgree.png" alt="postgrees" />
                    <img src="postman.png" alt="postman" />
                    <img src="nextjs.png" alt="nextjs" />
                </div>
                <button className="button" onClick={() => router.push('/login')}>
                    Voltar para Login
                </button>
            </div>
        </div>
    );
}