import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonDownload.module.scss';

const link = '#'


export default function ButtonDownload() {
    return (
        <a href={link} className={styles.download}>
            Прайс-лист
            <SpriteIcon id='download' />
        </a>
    );
}