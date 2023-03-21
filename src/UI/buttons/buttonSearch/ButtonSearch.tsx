import { ReactNode } from "react";
import styles from './ButtonSearch.module.scss';

interface ButtonSearchProps {
    children: ReactNode
}



export default function ButtonSearch({ children }: ButtonSearchProps) {
    return (
        <button type='submit' className={styles.search }>
            {children}
        </button>
    );


}