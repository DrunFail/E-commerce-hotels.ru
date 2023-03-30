import { Link } from "react-router-dom";
import SpriteIcon from "../../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonTelegram.module.scss';

export default function ButtonTelegram() {
    return (
        <Link
            to='#'
            className={styles.button}
            aria-label='telegram link'>

            <SpriteIcon id='telegram3' />
        </Link>

    );
}