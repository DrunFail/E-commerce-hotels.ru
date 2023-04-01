import SpriteIcon from "../../../spriteIcon/SpriteIcon";
import styles from './ButtonTogglePage.module.scss';


interface ButtonTogglePageProps {
    direction: 'toRight' | 'toLeft',
    prevPage?: () => void,
    nextPage?: () => void,
    disabled: boolean
}



export default function ButtonTogglePage({ direction, nextPage, prevPage,disabled }: ButtonTogglePageProps) {
    const handleClick = () => {
        if (direction === 'toRight' && nextPage) {
            nextPage();
        }
        if (direction === 'toLeft' && prevPage) {
            prevPage();
        }
    }

  

    return (
        <button
            type='button'
            className={styles[direction === 'toRight' ? 'toRight' : 'toLeft']}
            aria-label={direction === 'toRight' ? 'next page' : 'previous page'}
            onClick={handleClick}
            disabled={disabled }
        >

            <SpriteIcon id='arrow-right' />
        </button>
    );
}