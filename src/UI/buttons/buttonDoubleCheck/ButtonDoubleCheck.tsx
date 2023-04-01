import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonDoubleCheck.module.scss';

export default function ButtonDoubleCheck() {
    return (
        <button className={styles.button }>
            <SpriteIcon id='double-check' />
        </button>
    );
}