import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonBurger.module.scss';


export default function ButtonBurger() {
    return (
        <button className={styles.button}>
            <SpriteIcon id='burger' />
        </button>
    );
}