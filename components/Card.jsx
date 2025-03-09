import styles from "../styles/Card.module.css";

export default function Card({ title, text }) {
    return (
        <div className={styles.Card}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}