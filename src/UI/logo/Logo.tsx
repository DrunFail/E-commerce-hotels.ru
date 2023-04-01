import { Link } from "react-router-dom";
import SpriteIcon from "../../components/spriteIcon/SpriteIcon";
import styles from './Logo.module.scss';


export default function Logo() {
    return (
        <div className={styles.logo }>
            <Link
                to='/'
                aria-label='homepage logo link'
            >
                <SpriteIcon id="logo" />
            </Link>
        </div>
    );
}