import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonCatalog.module.scss';


export default function ButtonCatalog() {
    return (
        <button type='button' className={styles.catalog }>
            Каталог
            <SpriteIcon id='catalog' />
        </button>
    );
}