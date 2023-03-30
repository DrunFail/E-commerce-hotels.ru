import { Link } from "react-router-dom";
import './EmptyCart.scss';

export default function EmptyCart() {
    return (
        <div className='empty-cart' >
            <div className='empty-cart-text'>
                <p>В Вашей корзине</p>
                <p>пока пусто...</p>
            </div>
            <Link to='/kosmetika-i-gigiena'>Перейти в каталог</Link>

        </div>
    );
}