import { MouseEventHandler } from "react";
import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonArrowRight.module.scss';


interface ButtonArrowRightProps {
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    showFilter?: boolean
}

export default function ButtonArrowRight({handleClick, showFilter }:ButtonArrowRightProps) {
    return (
        <button
        type='button'
            onClick={handleClick}
            className={styles[showFilter ? 'button-open' : 'button']}
            aria-label='confirm and send button'
        >
            <SpriteIcon id='arrow-right' />
        </button>
    
    );
}