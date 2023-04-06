import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import ButtonCounter from '../../../../UI/buttons/buttonCounter/ButtonCounter';
import ButtonRemove from '../../../../UI/buttons/buttonRemove/ButtonRemove';
import { SizeUnit, VolumeType } from '../../../catalog/interfaces/interfaces';
import { selectProductById } from '../../../catalog/redux/selectors';
import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import { ShoppingCartItem } from '../../interface/interfaces';
import { decrementCartItem, deleteCartItem, incrementCartItem } from '../../redux/cartSlice';
import styles from './CartListItem.module.scss';


interface CartListItemProps {
    elem: ShoppingCartItem
}


 function CartListItem({ elem }: CartListItemProps) {
    const dispatch = useAppDispatch();

    //получаем данные продукта из корзины по code
    const productItem = useAppSelector(state => selectProductById(state, elem.code))

    //если не найден - выбрасываем ошибку
    if (!productItem) {
        throw new Error('dont get product for cart');
    }

    //handlers для управления корзиной
    const deleteItem = () => dispatch(deleteCartItem(productItem.code))

    const incHandler = () => {
        dispatch(incrementCartItem(productItem.code));
    }

    const decHandler = () => {
        dispatch(decrementCartItem(productItem.code));
    }

    //условие выбор единиц объема/размера
    const volume = productItem.volume.toLowerCase() === VolumeType.bottle;


    return (
        <article className={styles.item}>

            <img src={productItem.url} alt={productItem.title} />

            <div className={styles.text}>
                <div className={styles.volume}>
                    {volume
                        ? <SpriteIcon id='bottle' />
                        : <SpriteIcon id='box' />}
                    <p>{productItem.size} {volume ? SizeUnit.bottle : SizeUnit.box}</p>
                </div>
                <p data-testid="cart-item-title" className={styles.mainTitle}>{productItem.brand} {productItem.title}</p>
                <p className={styles.description}>{productItem.description}</p>
            </div>
            <div className={styles.counter}>
                <ButtonCounter
                    incHandler={incHandler}
                    decHandler={decHandler}
                    count={elem.count} />
            </div>

            <div className={styles.price}>{productItem.price} ₸</div>
            <div className={styles.remove}>
                <ButtonRemove onClick={deleteItem} />
            </div>
        </article>
    );
}

export default React.memo(CartListItem);