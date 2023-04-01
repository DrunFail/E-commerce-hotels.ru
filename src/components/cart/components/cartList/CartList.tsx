import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import useCartTotalPrice from '../../hooks/useCartTotalPrice';
import { clearCart } from '../../redux/cartSlice';
import { selectCart } from '../../redux/selectors';
import CartListItem from '../cartListItem/CartListItem';
import EmptyCart from '../emptyCart/EmptyCart';
import OrderConfirmMessage from '../orderConfirmMessage/OrderConfirmMessage';
import styles from './CartList.module.scss';


export default function CartList() {
//toggle для сообщения об оформлении заказа
    const [orderConfirm, setOrderConfirm] = useState(false);

    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    const { totalPrice } = useCartTotalPrice();

//если корзина пустая 
    if (!cart.length) return <EmptyCart />

    return (
        <section className={styles.section}>
            <h2>Корзина</h2>
            {cart.length > 0 &&
                <div className={styles.items}>
                    {cart.map(cartItem =>
                        <CartListItem
                            key={cartItem.code}
                            elem={cartItem} />
                    )}
                    <div className={styles.total}>
                        <a onClick={() => {
                            setOrderConfirm(orderConfirm => !orderConfirm);
                            dispatch(clearCart());
                        }} >Оформить заказ</a>
                        <p>{totalPrice} ₸</p>
                    </div>
                </div>
            }


            {orderConfirm &&
                <div className={styles.content}>
                    <OrderConfirmMessage />
                </div>}
        </section>

    );
}