import { ReactNode } from 'react';
import styles from './ButtonInCart.module.scss';


interface ButtonInCartProps {
    text: string,
    children: ReactNode
}


export default function ButtonInCart({ text, children }: ButtonInCartProps) {
    return (
        <button className={styles.button}>
            {text}
            {children}
        </button>
    );
    
}