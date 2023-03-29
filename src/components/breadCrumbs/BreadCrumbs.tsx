import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectProductTitleById } from "../catalog/redux/productSlice";
import styles from './BreadCrumbs.module.scss';


const categoryList = [
    {
        name: 'kosmetika-i-gigiena',
        value: 'Косметика и гигиена'
    }
]



export default function BreadCrumbs() {
    const location = useLocation();


    const partsUrl = location.pathname.split('/').filter(elem => elem);

    const [category, product] = partsUrl;

    const currentCategory = categoryList.find(elem => elem.name === category);
    if (!currentCategory) {
        throw new Error ('invalid category name');
    }

    const productTitle = useAppSelector(state => selectProductTitleById(state, +product))
  

    return (
        <>
            {location.pathname !== '/' &&
                < div className={styles.container }>
                    <p>Главная</p>
                    <p>{currentCategory.value}</p>
                    <p>{productTitle}</p>
                </div>
            }

        </>

    );
}