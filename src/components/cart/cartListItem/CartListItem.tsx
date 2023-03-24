import ButtonRemove from "../../../UI/buttons/buttonRemove/ButtonRemove";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import SpriteIcon from "../../spriteIcon/SpriteIcon";
import styles from './CartListItem.module.scss';
import Sprite from '../../../assets/img/sprite.svg';

interface CartListItemProps {
    elem: ProductItem
}


export default function CartListItem({ elem }: CartListItemProps) {
    return (
        <article className={styles.item}>
            
                <img src={elem.url} alt={elem.title} />
            
            <div className={styles.text }>
                <div className={styles.volume }>
                    {elem.volume.toLowerCase() == 'объем'
                        ? <SpriteIcon sprite={Sprite} id='bottle' />
                        : <SpriteIcon sprite={Sprite} id='box' />}
                    <p>{elem.size}</p>
                </div>
                <p className={styles.mainTitle }>{elem.brand} {elem.title}</p>
                <p className={styles.description }>{elem.description}</p>
            </div>
            <div className={styles.counter}>
                <button>-</button>
                5
                <button>+</button>
            </div>
            <div>{elem.price}</div>
            <div>
                <ButtonRemove />
            </div>
        </article>
    );
}