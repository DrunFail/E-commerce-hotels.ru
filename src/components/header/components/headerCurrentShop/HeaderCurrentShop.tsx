import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import styles from './HeaderCurrentShop.module.scss';


interface HeaderCurrentShopProps {
    address: string,
    description: string
}


export default function HeaderCurrentShop({address, description }: HeaderCurrentShopProps) {
    return (
        <div className={styles.currentShop}>
            <SpriteIcon id='location' />
            <p>{address}</p>
            <p>{description}</p>
        </div>
    );
}