import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import Sprite from '../../../assets/img/sprite.svg';
import styles from './ButtonRemove.module.scss';



export default function ButtonRemove() {
    return (
        <button className={styles.button }><SpriteIcon sprite={Sprite} id={"remove"} /></button>
    );
}