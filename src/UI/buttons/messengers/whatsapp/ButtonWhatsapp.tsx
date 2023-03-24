import SpriteIcon from "../../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonWhatsapp.module.scss';

export default function ButtonWhatsapp() {
    return (
        <button className={styles.button }>
        <SpriteIcon id='whatsapp'/>
        </button>
    
    );
}