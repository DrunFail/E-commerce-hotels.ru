import { useState } from 'react';
import data from '../../../fakeData/data.json';
import { ProductItem } from '../interfaces/interfaces';
import ProductListItem from '../productListItem/ProductListItem';
import styles from './ProductList.module.scss';

export default function ProductList() {
    const [productItems] = useState<ProductItem[]>(data);


    return (
        <>
        <section className={styles.section}>
      
            {productItems.map(item => <ProductListItem key={item.code} item={item } />) }
        </section>
        
        </>
    );
}