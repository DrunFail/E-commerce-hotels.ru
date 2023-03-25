import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonDownload.module.scss';

const link = '#'
interface ButtonDownloadProps {
    color: 'white' | 'orange'
}

const getStyleClass = (color: string) => {
    switch (color) {
        case 'white': return 'download-white';
        case 'orange': return 'download';
        default: return 'orange';
    }
}


export default function ButtonDownload({ color }: ButtonDownloadProps) {

   

    return (
        <a href={link} className={styles[getStyleClass(color)]}>
            Прайс-лист
            <SpriteIcon id='download' />
        </a>
    );
}