import SpriteIcon from "../../components/spriteIcon/SpriteIcon";
import styles from './VolumeIcon.module.scss';


interface VolumeIconProps {
    volume: string,
    size: number,
    sizeUnit: string
}


export default function VolumeIcon({volume, size,sizeUnit }:VolumeIconProps) {
    return (
        <div className={styles.icon}>
            {volume.toLowerCase() == 'объем'
                ? <SpriteIcon id='bottle' />
                : <SpriteIcon id='box' />}
            
            <p>{size} {sizeUnit}</p>
        </div>
    );
}