import {useAppSelector } from '../../../../redux/hooks';
import useFilter from '../../../filters/hooks/useFilter';
import usePagination from '../../../pagination/hooks/usePagination';
import Pagination from '../../../pagination/Pagination';
import { selectProduct } from '../../redux/selectors';
import ProductListItem from '../productListItem/ProductListItem';
import styles from './ProductList.module.scss';


export default function ProductList() {
    const productList = useAppSelector(selectProduct);

    //получаем данные для рендера отфильтрованных товаров
    const renderedData = useFilter(productList);


    //для пагинации
    const { currentPage,
        from,
        to,
        pageCount,
        toggleCurrentPage,
        prevPage,
        nextPage } = usePagination({ arr: renderedData, perPage: 10 });


    return (
        <>
            <section className={styles.section}>

                {renderedData.map((item, index) => {
                    if (index >= from && index < to) {
                        return <ProductListItem
                            key={item.code}
                            item={item} />
                    }
                }
                )}
            </section>

            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                toggleCurrentPage={toggleCurrentPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </>
    );
}