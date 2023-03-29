import { ReactNode } from "react";
import styles from './ButtonSearch.module.scss';


interface ButtonSearchProps {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}


export default function ButtonSearch({ children, onClick }: ButtonSearchProps) {
    return (
        <button
            className={styles.search}
            type='button'
            onClick={onClick}>

            {children}

        </button>
    );
}