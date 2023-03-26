import { MouseEventHandler, ReactNode } from 'react';
import { addCartItem } from '../../../components/cart/redux/cartSlice';
import SpriteIcon from '../../../components/spriteIcon/SpriteIcon';
import { useAppDispatch } from '../../../redux/hooks';
import styles from './ButtonInCart.module.scss';

interface ButtonInCartProps {
    code: number,

}


export default function ButtonInCart({ code }: ButtonInCartProps) {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(addCartItem({code, count: 1}))} className={styles.button}>
            В корзину
            <SpriteIcon id='cart-white' />
        </button>
    );
    
}