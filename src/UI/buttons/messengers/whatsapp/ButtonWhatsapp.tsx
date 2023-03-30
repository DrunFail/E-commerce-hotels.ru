import { Link } from "react-router-dom";
import SpriteIcon from "../../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonWhatsapp.module.scss';

export default function ButtonWhatsapp() {
    return (
        <Link
            to='#'
            className={styles.button}
            aria-label='whatsapp link'>

            <SpriteIcon id='whatsapp' />
        </Link>
    );
}