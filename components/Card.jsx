import styles from "../styles/Card.module.css";

export default function Card({ title, text }) {
    return (
        <div className={styles.Card}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
        </div>
    );
}
