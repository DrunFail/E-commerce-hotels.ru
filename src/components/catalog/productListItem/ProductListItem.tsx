import { Link } from "react-router-dom";
import ButtonInCart from "../../../UI/buttons/buttonInCart/ButtonInCart";
import SpriteIcon from "../../spriteIcon/SpriteIcon";
import { ProductItem } from "../interfaces/interfaces";
import styles from './ProductListItem.module.scss';

interface ProductListItemProps {
    item: ProductItem
}


export default function ProductListItem({ item }: ProductListItemProps) {
   
   



    return (
        <article className={styles.article}>
            <div className={styles.image}>
                <p>Популярное</p>
                <img src={item.url} alt={item.title} />
                <div>
                    <p>{item.volume.toLowerCase() == 'объем'
                        ? <SpriteIcon id='bottle' />
                        : <SpriteIcon id='box' />}
                    </p>
                    <p>{item.size}</p>
                </div>
               
            </div>

            <Link to={`${item.code}`}><span>{item.brand}</span> {item.title}</Link>
            <div className={styles.details}>
                <p>Штрихкод: <span>{item.code}</span></p>
                <p>Производитель: <span>{item.manufacturer}</span></p>
                <p>Бренд: <span>{item.brand}</span></p>
                <p>Тип ухода: <span>{item.typeCare}</span></p>
            </div>
            <div className={styles.price}>
                <p>{item.price} T</p>
                <ButtonInCart code={item.code } />
            </div>

        </article>
    );
}