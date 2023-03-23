import { useState } from 'react';
import styles from './FilterPrice.module.scss';


export default function PriceFilter() {
    const [price, setPrice] = useState({ from: '', to: '' });

    const handlePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice((price) => ({ ...price, from: e.target.value }))
    }

    const handlePriceTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice((price) => ({ ...price, to: e.target.value }))
    }


    return (
        <div className={styles.filter}>
            <p>Цена</p>
            <div className={styles.inputs }>
                <input value={price.from} onChange={handlePriceFrom} placeholder='0'/>
                <span>-</span>
                <input value={price.to} onChange={handlePriceTo} placeholder='10000' />
            </div>
        </div>
    );
}



