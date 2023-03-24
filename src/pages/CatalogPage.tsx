import ProductList from "../components/catalog/productList/ProductList";
import FilterListRow from "../components/filters/filterListRow/FilterListRow";
import { filterOptions } from '../components/filters/constants';
import FilterRenderedList from "../components/filters/filterRenderedList/FilterRenderedList";
import styles from './CatalogPage.module.scss';
import Sort from "../components/filters/sort/Sort";


export default function CatalogPage() {
    
    return (<>
        
        <div className={styles.page}>
            <div className={styles.sort}>
            <h2>Косметика и гигиена</h2>
            <Sort />
            </div>
            <div className={styles.filterTop }>
                <FilterListRow dataList={filterOptions} />
            </div>
            <div className={styles.filterAside }>
                <FilterRenderedList />
            </div>
            <div className={styles.catalog }>
                <ProductList />
            </div>
            
        </div>
    </>
    );
}