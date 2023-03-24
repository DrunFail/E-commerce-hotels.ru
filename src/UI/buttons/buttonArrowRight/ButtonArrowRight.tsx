import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonArrowRight.module.scss';

export default function ButtonArrowRight() {
    return (
        <button className={styles.button } ><SpriteIcon id='arrow-right'/></button>
    
    );
}