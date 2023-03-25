import styles from './ButtonCounter.module.scss';


export default function ButtonCounter() {
    return (
        <div className={styles.counter}>
            <button>-</button>
            5
            <button>+</button>
        </div>
    
    );
}