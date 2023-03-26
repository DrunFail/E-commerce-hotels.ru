import data from '../../../fakeData/data.json';
import { useAppSelector } from '../../../redux/hooks';
import { ProductItem } from '../../catalog/interfaces/interfaces';
import CartListItem from '../cartListItem/CartListItem';
import { ShoppingCartItem } from '../interface/interfaces';
import { selectCart } from '../redux/cartSlice';
import styles from './CartList.module.scss';





export default function CartList() {
    const cart = useAppSelector(selectCart);
    
    let totalPrice = 0;
    const priceT = (cartList: ShoppingCartItem[], dataList: ProductItem[]) => cartList.forEach(cartItem => {
        const getItemById = dataList.find(elem => elem.code === cartItem.code);
        if (!getItemById) return;
        totalPrice += cartItem.count * getItemById.price;
    })
    
    priceT(cart, data);
    
    


    return (
        <section className={styles.section }>
            <h2>Корзина</h2>
            {cart.map(cartItem =>
                <CartListItem key={cartItem.code} elem={cartItem} />
            )}
            <div className={styles.total }>
                <a href='order'>Офомить заказ</a>
                <p>{totalPrice}</p>
            </div>
        </section>
    
    );
}