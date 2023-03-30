import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import useCartTotalPrice from '../../hooks/useCartTotalPrice';
import { clearCart, selectCart } from '../../redux/cartSlice';
import CartListItem from '../cartListItem/CartListItem';
import OrderConfirmMessage from '../orderConfirmMessage/OrderConfirmMessage';
import styles from './CartList.module.scss';


export default function CartList() {
    const [orderConfirm, setOrderConfirm] = useState(false);

    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { totalPrice} = useCartTotalPrice();
    

    return (
        <section className={styles.section}>
            <h2>Корзина</h2>
            {cart.length > 0 &&
                <>
                    {cart.map(cartItem =>
                        <CartListItem key={cartItem.code} elem={cartItem} />
                    )}
                    < div className={styles.total}>
                        <a onClick={() => {
                            setOrderConfirm(orderConfirm => !orderConfirm);
                            dispatch(clearCart());
                        }} >Оформить заказ</a>
                    <p>{totalPrice} ₸</p>
                    </div>
                </>
            }


            {orderConfirm &&
                <div className={styles.content}>
                    <OrderConfirmMessage />
                </div>}
        </section>

    );
}