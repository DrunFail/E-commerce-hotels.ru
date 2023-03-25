import { ReactNode } from 'react';
import SpriteIcon from '../../../components/spriteIcon/SpriteIcon';
import styles from './ButtonInCart.module.scss';




export default function ButtonInCart() {
    return (
        <button className={styles.button}>
            В корзину
            <SpriteIcon id='cart-white' />
        </button>
    );
    
}