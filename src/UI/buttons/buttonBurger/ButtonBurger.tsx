import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonBurger.module.scss';


interface ButtonBurgerProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    status: boolean
}

export default function ButtonBurger({onClick, status }: ButtonBurgerProps) {
    return (
        <button
            type='button'
            className={styles.button}
            aria-label='menu'
            onClick={onClick }
        >
            {status ? <SpriteIcon id='close' /> : <SpriteIcon id='burger' />}
        </button>
    );
}