import { Link } from "react-router-dom";
import ButtonCartInludes from "../../../../UI/buttons/buttonCartIncludes/ButtonCartIncludes";
import ButtonInCart from "../../../../UI/buttons/buttonInCart/ButtonInCart";
import VolumeIcon from "../../../../UI/volumeIcon/VolumeIcon";
import useCartTotalPrice from "../../../cart/hooks/useCartTotalPrice";
import { ProductItem } from "../../interfaces/interfaces";
import styles from './ProductListItem.module.scss';


interface ProductListItemProps {
    item: ProductItem
}


export default function ProductListItem({ item }: ProductListItemProps) {
    //есть ли товар в корзине
    const { status } = useCartTotalPrice(item.code);
    

    return (
        <article className={styles.article}>
            <div className={styles.image}>
                <p>Популярное</p>
                <img src={item.url} alt={item.title} />
              
                <VolumeIcon volume={item.volume} size={item.size} sizeUnit={item.sizeUnit} />
               
            </div>

            <Link to={`${item.code}`}><span>{item.brand}</span> {item.title}</Link>
            <div className={styles.details}>
                <p>Штрихкод: <span>{item.code}</span></p>
                <p>Производитель: <span>{item.manufacturer}</span></p>
                <p>Бренд: <span>{item.brand}</span></p>
                <div className={styles.typeCare}>Тип ухода: <div className={styles.items }>{item.typeCare.map((elem, index) => <span key={index}>{elem}</span>)}</div></div>
            </div>
            <div className={styles.price}>
                <p>{item.price} ₸</p>
                {status
                    ? <ButtonCartInludes />
                    : <ButtonInCart code={item.code} />}
                    
            </div>

        </article>
    );
}