"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./redirecting.module.css"; 

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/signup");
        }, 5000);
        return () => clearTimeout(timeout); 
    }, [router]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Carregandooooo...</h1>
            <p className={styles.subtitle}>Aguarde.</p>
        </div>
    );
}