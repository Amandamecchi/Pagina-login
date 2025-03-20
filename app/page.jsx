"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./redirecting.css";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/signup");
        }, 5000);
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <div className={styles.container}>
         <h1>carregandooo</h1>
       </div>
     );
}