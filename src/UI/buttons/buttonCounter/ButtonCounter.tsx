import styles from './ButtonCounter.module.scss';


interface ButtonCounterProps {
    incHandler?: React.MouseEventHandler<HTMLButtonElement>,
    decHandler?: React.MouseEventHandler<HTMLButtonElement>,
    count?: number
}


export default function ButtonCounter({incHandler, decHandler, count }:ButtonCounterProps) {
    return (
        <div className={styles.counter}>
            <button type='button' onClick={decHandler }>-</button>
            {count }
            <button type='button' onClick={incHandler }>+</button>
        </div>
    
    );
}