import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonRemove.module.scss';



export default function ButtonRemove() {
    return (
        <button className={styles.button}>
            <SpriteIcon id={"remove"} />
        </button>
    );
}