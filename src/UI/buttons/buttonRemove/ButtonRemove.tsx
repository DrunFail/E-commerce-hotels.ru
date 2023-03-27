import { MouseEventHandler } from "react";
import SpriteIcon from "../../../components/spriteIcon/SpriteIcon";
import styles from './ButtonRemove.module.scss';


interface ButtonRemoveProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
}


export default function ButtonRemove({onClick }: ButtonRemoveProps) {
    return (
        <button type='button' onClick={onClick} className={styles.button}>
            <SpriteIcon id={"remove"} />
        </button>
    );
}