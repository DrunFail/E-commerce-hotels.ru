import { ReactNode } from "react";
import styles from './MobileButtonSearch.module.scss';

interface MobileButtonSearchProps {
    children: ReactNode,
    text: string
}


export default function MobileButtonSearch({ children, text }: MobileButtonSearchProps) {
    return (
        <button type='button' className={styles.button }>
            {children}
            {text}
        </button>
    
    );
}