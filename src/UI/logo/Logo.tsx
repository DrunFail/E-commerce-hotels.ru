import { ReactNode } from "react";
import SpriteIcon from "../../components/spriteIcon/SpriteIcon";
import styles from './Logo.module.scss';

interface LogoProps {
    href: string
}


export default function Logo({href }: LogoProps) {
    return (
        <div className={styles.logo }>
            <a href={href }>
                <SpriteIcon id="logo" />
            </a>
        </div>
    );
}