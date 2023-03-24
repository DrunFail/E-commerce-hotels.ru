import data from '../../../fakeData/data.json';
import CartListItem from '../cartListItem/CartListItem';
import styles from './CartList.module.scss';



export default function CartList() {
    return (
        <section className={styles.section }>
            <h2>Корзина</h2>
            {data.map(elem =>
                <CartListItem key={elem.code} elem={elem} />
            )}
            <div className={styles.total }>
                <a href='order'>Офомить заказ</a>
<p>total</p>
            </div>
        </section>
    
    );
}