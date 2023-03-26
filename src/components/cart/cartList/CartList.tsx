import { useState } from 'react';
import data from '../../../fakeData/data.json';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { ProductItem } from '../../catalog/interfaces/interfaces';
import CartListItem from '../cartListItem/CartListItem';
import { ShoppingCartItem } from '../interface/interfaces';
import OrderConfirmMessage from '../orderConfirmMessage/OrderConfirmMessage';
import { clearCart, selectCart } from '../redux/cartSlice';
import styles from './CartList.module.scss';





export default function CartList() {
    const [orderConfirm, setOrderConfirm] = useState(false);

    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    let totalPrice = 0;
    const priceT = (cartList: ShoppingCartItem[], dataList: ProductItem[]) => cartList.forEach(cartItem => {
        const getItemById = dataList.find(elem => elem.code === cartItem.code);
        if (!getItemById) return;
        totalPrice += cartItem.count * getItemById.price;
    })

    priceT(cart, data);


    console.log(cart.length)

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
                        <p>{totalPrice}</p>
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