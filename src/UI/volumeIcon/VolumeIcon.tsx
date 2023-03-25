import SpriteIcon from "../../components/spriteIcon/SpriteIcon";
import styles from './VolumeIcon.module.scss';

interface VolumeIconProps {

    volume: string,
    size: number
}


export default function VolumeIcon({volume, size }:VolumeIconProps) {
    return (
        <div className={styles.icon }>
            <p>{volume.toLowerCase() == 'объем'
                ? <SpriteIcon id='bottle' />
                : <SpriteIcon id='box' />}
            </p>
            <p>{size}</p>
        </div>
    );
}