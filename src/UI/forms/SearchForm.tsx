import { ReactNode } from "react";
import styles from './SearchForm.module.scss';

interface SearchFormProps {
    children: ReactNode
}


export default function SearchForm({ children }: SearchFormProps) {
    return (
        <form className={styles.form}>
            <input type='search' placeholder='Поиск...' />
            {children}
        </form>
    );
}