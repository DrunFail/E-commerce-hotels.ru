import { ReactNode } from 'react';
import styles from './HeaderCartBlock.module.scss';


interface HeaderCartBlockProps {
    children: ReactNode,
    text: string,
    linkUrl: string,
    totalPrice: string
}

export default function HeaderCartBlock({children, text, linkUrl, totalPrice }:HeaderCartBlockProps) {
    return (
        <a href={linkUrl} className={styles.cart }>
            {children}
            <p>{text}</p>
            <p>{totalPrice}</p>
        </a>
    );
}