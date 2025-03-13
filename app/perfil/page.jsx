import styles from '../perfil/perfil.css';
import Card from '../../components/Card';
export default 	function Perfil() {
    return (
        <div className="container">
            <div className="perfil">
                <div className= "image">
                    <img src="/foto-formal.jpeg" alt="Perfil" />
                </div>
                <Card title="Amanda Gomes Mechi"/>
                <Card text="Estudante da rede Sesi Senai - Valinhos"/>
                <Card text="Desenvolvedora de Software"/>
                <Card text="🎂 27/03/2008 "/>
                <Card text="🦁 + ✂ = 🐱"/>
                <Card text="2 TDS-1"/>
                <Card text="16 anos"/>
</div>
        </div>
    )
}