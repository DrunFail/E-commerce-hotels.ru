import SpriteIcon from "../../../spriteIcon/SpriteIcon";
import syles from './ButtonHide.module.scss';

interface ButtonHideProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonHide({handleClick }:ButtonHideProps) {
    return (
        <button className={syles.button} type='button' onClick={handleClick}>Свернуть
            <SpriteIcon id='triangle' />
        </button>
    );
}