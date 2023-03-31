import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import styles from './HeaderCurrentShop.module.scss';


export default function HeaderCurrentShop() {
    return (
        <div className={styles.currentShop}>
            <SpriteIcon id='location' />
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
            <p>(Рынок Восточный)</p>
        </div>
    );
}