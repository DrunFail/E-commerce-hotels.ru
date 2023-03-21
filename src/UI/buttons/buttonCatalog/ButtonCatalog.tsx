import { ReactNode } from "react";
import styles from './ButtonCatalog.module.scss';


interface ButtonCatalogProps {
    text: string,
    children: ReactNode
}

export default function ButtonCatalog({text, children }:ButtonCatalogProps) {
    return (
        <button type='button' className={styles.catalog }>
            {text}
            {children}
        </button>
    );
}