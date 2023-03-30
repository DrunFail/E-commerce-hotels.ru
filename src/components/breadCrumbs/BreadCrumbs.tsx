import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectProductById, selectProductTitleById } from "../catalog/redux/productSlice";
import styles from './BreadCrumbs.module.scss';


const categoryList: { [key: string]: { name: string } } = {
    'kosmetika-i-gigiena': { name: 'Косметика и гигиена' },
    'admin': { name: 'Админ-панель' },
    'add-new-product': { name: 'Добавить новый продукт' },
    'cart': { name: 'Корзина' }

}




export default function BreadCrumbs() {
    const location = useLocation();
    const partsUrl = location.pathname.split('/').filter(elem => elem);
    const [category, product] = partsUrl;

    const productData = useAppSelector(state => selectProductById(state, +product));

    const renderedCategory = categoryList[category].name
    let renderedSubcategory;
    if (category === 'kosmetika-i-gigiena' && product) {
        renderedSubcategory = productData?.title
    } else if (product) {

        renderedSubcategory = categoryList[product].name
    }

    

    return (
        <>
            <div className={styles.container}>
                <Link to='/'>Главная</Link>
                <Link to={category}>{renderedCategory}</Link>
                {renderedSubcategory && <Link to='#'>{renderedSubcategory}</Link>}
            </div>
        </>

    );
}