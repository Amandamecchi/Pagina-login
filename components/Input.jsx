import styles from '../styles/Home.module.css';

export default function Home(){
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Enter your name" />
            <button>Submit</button>
           
        </div>
    )
}