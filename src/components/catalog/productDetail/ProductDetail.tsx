import { useParams } from 'react-router-dom';
import data from '../../../fakeData/data.json';
import { useResize } from '../../../hooks/useResize';
import ButtonCounter from '../../../UI/buttons/buttonCounter/ButtonCounter';
import ButtonDownload from '../../../UI/buttons/buttonDownload/ButtonDownload';
import ButtonInCart from '../../../UI/buttons/buttonInCart/ButtonInCart';
import ButtonShare from '../../../UI/buttons/buttonShare/ButtonShare';
import VolumeIcon from '../../../UI/volumeIcon/VolumeIcon';
import styles from './ProductDetail.module.scss';


export default function ProductDetail() {
    const { catalogId } = useParams();
    const product = data.filter(elem => elem.code.toString() === catalogId)[0];

    const size = useResize();


    return (
        <div className={styles.product}>
            <img src={product.url} alt={product.title} />
            <div className={styles.content}>
                <div className={styles.title }>
                <p>В наличии</p>
                <h1><span>{product.brand}</span> {product.title}</h1>
                    <VolumeIcon volume={product.volume} size={product.size} />
                </div>
                <div className={styles.addToCart}>
                    <p>{product.price} T</p>
                    <ButtonCounter />

                    <ButtonInCart />
                    {size < 800 && <ButtonShare /> }
                    

                </div>
                <div className={styles.promoBlock}>
                    {size < 800 || <ButtonShare />}
                    <div>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</div>
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