import { useParams } from 'react-router-dom';
import { useResize } from '../../../../hooks/useResize';
import { useAppSelector } from '../../../../redux/hooks';
import ButtonCartInludes from '../../../../UI/buttons/buttonCartIncludes/ButtonCartIncludes';
import ButtonCounter from '../../../../UI/buttons/buttonCounter/ButtonCounter';
import ButtonDownload from '../../../../UI/buttons/buttonDownload/ButtonDownload';
import ButtonInCart from '../../../../UI/buttons/buttonInCart/ButtonInCart';
import ButtonShare from '../../../../UI/buttons/buttonShare/ButtonShare';
import VolumeIcon from '../../../../UI/volumeIcon/VolumeIcon';
import useCartTotalPrice from '../../../cart/hooks/useCartTotalPrice';
import { selectProductById } from '../../redux/selectors';
import styles from './ProductDetail.module.scss';


export default function ProductDetail() {
    const size = useResize();
    const { categoryId } = useParams();
    
    //пробрасываем ошибку, если не получим код товара
    if (!categoryId) {
        throw new Error('dont get category id, details');
    }
    //пробрасываем ошибку, если не получим данные товара из стора 
    const product = useAppSelector(state => selectProductById(state,+categoryId))
    if (!product) {
        throw new Error('dont fetch product by id - details');
    }

    //boolean есть ли товар в корзине - для смены кнопки
    const { status } = useCartTotalPrice(product.code);

    return (
        <div className={styles.product}>
            <img src={product.url} alt={product.title} />
            <div className={styles.content}>
                <div className={styles.title }>
                <p>В наличии</p>
                <h1><span>{product.brand}</span> {product.title}</h1>
                    <VolumeIcon
                        volume={product.volume}
                        size={product.size}
                        sizeUnit={product.sizeUnit} />
                </div>
                <div className={styles.addToCart}>
                    <p>{product.price} ₸</p>
                    <ButtonCounter count={5 } />
                    {status
                        ? <ButtonCartInludes />
                        : <ButtonInCart code={product.code} /> }
                    
                    {size < 800 && <ButtonShare /> }
                    

                </div>
                <div className={styles.promoBlock}>
                    {size < 800 || <ButtonShare />}
                    <div>
                        <p>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</p>
                    </div>
                    <ButtonDownload color='white' />
                </div>

                <div className={styles.details}>
                    <p>Производитель:<span>{product.manufacturer}</span></p>
                    <p>Бренд: <span>{product.brand}</span></p>
                    <p>Артикул<span>{product.code}</span></p>
                    <p>Штрихкод: <span>{product.code}</span></p>
                </div>
                <div className={styles.description}>
                    <p>Описание</p>
                    <p>{product.description}</p>
                </div>
                <div className={styles.border }></div>
                <div className={styles.details}>
                    <p>Характеристики</p>
                    <p>Назначение</p>
                    <p>Тип </p>
                    <p>Производитель</p>
                    <p>Бренд</p>
                    <p>Артикул</p>
                    <p>Штрихкод</p>
                    <p>Вес</p>
                    <p>Объем</p>
                    <p>Кол-во в коробке</p>
                </div>


            </div>

        </div>);
}