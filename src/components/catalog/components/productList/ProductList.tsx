import { useState } from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import useFilter from '../../../filters/hooks/useFilter';
import { selectProduct } from '../../redux/productSlice';
import ProductListItem from '../productListItem/ProductListItem';
import styles from './ProductList.module.scss';


export default function ProductList() {
    const productList = useAppSelector(selectProduct);
    const renderedData = useFilter(productList);


    return (
        <section className={styles.section}>

            {renderedData.map(item =>
                <ProductListItem
                    key={item.code}
                    item={item} />)}
        </section>
    );
}