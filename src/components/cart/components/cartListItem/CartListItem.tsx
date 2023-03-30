import styles from './CartListItem.module.scss';
import data from '../../../../fakeData/data.json';
import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import ButtonRemove from '../../../../UI/buttons/buttonRemove/ButtonRemove';
import { useAppDispatch } from '../../../../redux/hooks';
import { ShoppingCartItem } from '../../interface/interfaces';
import { decrementCartItem, deleteCartItem, incrementCartItem } from '../../redux/cartSlice';
import ButtonCounter from '../../../../UI/buttons/buttonCounter/ButtonCounter';


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

    const incHandler = () => {
        dispatch(incrementCartItem(cartItem.code));
    }

    const decHandler = () => {
        dispatch(decrementCartItem(cartItem.code));
    }
    const volume = cartItem.volume.toLowerCase() == 'объем' 


    return (
        <article className={styles.item}>
            
                <img src={cartItem.url} alt={cartItem.title} />
            
            <div className={styles.text }>
                <div className={styles.volume }>
                    {volume
                        ? <SpriteIcon id='bottle' />
                        : <SpriteIcon id='box' />}
                    <p>{cartItem.size} {volume ? 'мл' : 'г'}</p>
                </div>
                <p className={styles.mainTitle }>{cartItem.brand} {cartItem.title}</p>
                <p className={styles.description }>{cartItem.description}</p>
            </div>
           
            <ButtonCounter
                incHandler={incHandler}
                decHandler={decHandler}
                count={elem.count }            />

            <div className={styles.price}>{cartItem.price} ₸</div>
            <div>
                <ButtonRemove onClick={deleteItem} />
            </div>
        </article>
    );
}