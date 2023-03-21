import { ReactNode } from 'react';
import styles from './HeaderCurrentShop.module.scss';

interface HeaderCurrentShopProps {
    children: ReactNode,
    address: string,
    description: string
}


export default function HeaderCurrentShop({children, address, description }: HeaderCurrentShopProps) {
    return (
        <div className={styles.currentShop}>
            {children}
            <p>{address}</p>
            <p>{description}</p>
        </div>
    );
}