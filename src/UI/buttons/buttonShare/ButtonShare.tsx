import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonShare.module.scss';

export default function ButtonShare() {
    return (
        <button className={styles.button }>
            <SpriteIcon id='share' />
        </button>
    );
}