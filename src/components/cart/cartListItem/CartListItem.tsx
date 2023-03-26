import ButtonRemove from "../../../UI/buttons/buttonRemove/ButtonRemove";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import SpriteIcon from "../../spriteIcon/SpriteIcon";
import { ShoppingCartItem } from "../interface/interfaces";
import styles from './CartListItem.module.scss';
import data from '../../../fakeData/data.json';
import { decrementCartItem, deleteCartItem, incrementCartItem } from "../redux/cartSlice";
import { useAppDispatch } from "../../../redux/hooks";


interface CartListItemProps {
    elem: ShoppingCartItem
}


export default function CartListItem({ elem }: CartListItemProps) {
    const cartItem = data.find(item => item.code === elem.code);
    const dispatch = useAppDispatch();
    if (!cartItem) {
        throw new Error
    }
    const deleteItem = () => dispatch(deleteCartItem(cartItem.code))
    




    return (
        <article className={styles.item}>
            
                <img src={cartItem.url} alt={cartItem.title} />
            
            <div className={styles.text }>
                <div className={styles.volume }>
                    {cartItem.volume.toLowerCase() == 'объем'
                        ? <SpriteIcon id='bottle' />
                        : <SpriteIcon id='box' />}
                    <p>{cartItem.size}</p>
                </div>
                <p className={styles.mainTitle }>{cartItem.brand} {cartItem.title}</p>
                <p className={styles.description }>{cartItem.description}</p>
            </div>
            <div className={styles.counter}>
                <button onClick={() => dispatch(decrementCartItem(cartItem.code)) }>-</button>
                {elem.count }
                <button onClick={() => dispatch(incrementCartItem(cartItem.code)) }>+</button>
            </div>
            <div>{cartItem.price}</div>
            <div>
                <ButtonRemove onClick={deleteItem} />
            </div>
        </article>
    );
}