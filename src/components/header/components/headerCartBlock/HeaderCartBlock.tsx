import { Link } from 'react-router-dom';
import useCartTotalPrice from '../../../cart/hooks/useCartTotalPrice';
import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import styles from './HeaderCartBlock.module.scss';


export default function HeaderCartBlock() {
    const { totalPrice, cartLength } = useCartTotalPrice();
    
    return (
        <Link to='cart' className={styles.cart}>
            <div className={styles.cartContainer }>
                <SpriteIcon id='cart' />
                <p>{cartLength}</p>
            </div>
            
            <p>Корзина</p>
            <p>{totalPrice} ₸</p>
        </Link>
    );
}