import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonSearch.module.scss';


interface ButtonSearchProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}


export default function ButtonSearch({ onClick }: ButtonSearchProps) {
    return (
        <button
            className={styles.search}
            type='button'
            onClick={onClick}
            aria-label='button search'>

            <SpriteIcon id='search' />

        </button>
    );
}