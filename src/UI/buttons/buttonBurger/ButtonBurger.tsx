import { ReactNode } from "react";
import styles from './ButtonBurger.module.scss';

interface ButtonBurgerProps {
    children: ReactNode
}


export default function ButtonBurger({ children }:ButtonBurgerProps) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}