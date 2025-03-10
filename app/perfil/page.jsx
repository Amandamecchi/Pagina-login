import styles from '../../styles/Perfil.module.css';
import Card from '../../components/Card';
export default 	function Perfil() {
    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
                <div className={styles.image}>
                    <img src="https://i.pinimg.com/736x/95/f4/85/95f4854d922cd5a2eb3c988d12163da5.jpg" alt="Perfil" />
                </div>
                <Card title={"texto"} text={"sajkbfhejfwsh"}/>
                <Card title={"texto"} text={"sajkbfhejfwsh"}/>
                <Card title={"texto"} text={"sajkbfhejfwsh"}/>
</div>
        </div>
    )
}