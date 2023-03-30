import { ReactNode } from "react";
import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './MobileButtonSearch.module.scss';


export default function MobileButtonSearch() {
    return (
        <button type='button' className={styles.button }>
            <SpriteIcon id='search' />
            Поиск
        </button>
    
    );
}