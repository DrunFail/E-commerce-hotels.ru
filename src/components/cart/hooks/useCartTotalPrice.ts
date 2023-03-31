import { useAppSelector } from "../../../redux/hooks";
import { selectProduct } from "../../catalog/redux/selectors";
import { selectCart } from "../redux/selectors";



export default function useCartTotalPrice(code?:number) {
    const cart = useAppSelector(selectCart);
    const product = useAppSelector(selectProduct)

    let totalPrice = 0;
    const cartLength = cart.length;

    let status = cart.find(elem => elem.code === code) ? true : false
    
   
    

    cart.forEach(cartItem => {
        const getItemById = product.find(elem => elem.code === cartItem.code);
        if (!getItemById) return;
        totalPrice += cartItem.count * getItemById.price;
    })
    return { totalPrice, cartLength, status };
}

