import { Link } from "react-router-dom";
import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonClose.module.scss';

export default function ButtonClose() {
    return (
        <Link to='/catalog' className={styles.link }>
            <SpriteIcon id='close' />
        </Link>

    );
}