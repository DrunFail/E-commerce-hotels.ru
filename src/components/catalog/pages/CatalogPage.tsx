import ProductList from "../components/productList/ProductList";
import styles from './CatalogPage.module.scss';
import { useResize } from "../../../hooks/useResize";
import Sort from "../../filters/components/sort/Sort";
import FilterListRow from "../../filters/components/filterListRow/FilterListRow";
import FilterRenderedList from "../../filters/components/filterRenderedList/FilterRenderedList";
import { filterOptions } from "../../filters/constants";


export default function CatalogPage() {
    const size = useResize();
    
    return (
        <>

            <div className={styles.page}>
                <div className={styles.sort}>
                    <h2>Косметика и гигиена</h2>
                    {size < 800 || <Sort />}
                </div>
                {size < 800 ||
                    <div className={styles.filterTop}>
                        <FilterListRow dataList={filterOptions} />
                    </div>}
                <div className={styles.filterAside}>
                    <FilterRenderedList />
                </div>
                {size < 800 && <Sort />}
                <div className={styles.catalog}>
                    <ProductList />
                </div>
                
            </div>
        </>
    );
}