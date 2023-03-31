import { useAppSelector } from "../../../redux/hooks";
import { selectProduct, selectProductById } from "../../catalog/redux/selectors";
import { selectCart } from "../redux/selectors";



export default function useCartTotalPrice(code?: number) {
    const cart = useAppSelector(selectCart);
    const product = useAppSelector(selectProduct)

    let totalPrice = 0;
    const cartLength = cart.length;

    //для проверки наличия товара в корзине
    let status = cart.find(elem => elem.code === code) ? true : false



    //вычисление итоговой суммы
    cart.forEach(cartItem => {
        product.map(productItem => {
            if (productItem.code === cartItem.code) {
                totalPrice += cartItem.count * productItem.price;
                
            }
        }
        )
    }
    )
    return { totalPrice, cartLength, status };
}

