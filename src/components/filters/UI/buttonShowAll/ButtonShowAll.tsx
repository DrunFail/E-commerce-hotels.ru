import SpriteIcon from "../../../spriteIcon/SpriteIcon";
import styles from './ButtonShowAll.module.scss';

interface ButtonShowAllProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}


export default function ButtonShowAll({ handleClick }: ButtonShowAllProps) {
    return (
        <button
            type='button'
            className={styles.button}
            onClick={handleClick}>

            Показать все
            <SpriteIcon id='triangle' />

        </button>
    );
}