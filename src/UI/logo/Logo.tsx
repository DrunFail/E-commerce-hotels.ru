import { ReactNode } from "react";
import styles from './Logo.module.scss';

interface LogoProps {
    children: ReactNode,
    href: string
}


export default function Logo({ children, href }: LogoProps) {
    return (
        <div className={styles.logo }>
            <a href={href }>
                {children}
            </a>
        </div>
    );
}