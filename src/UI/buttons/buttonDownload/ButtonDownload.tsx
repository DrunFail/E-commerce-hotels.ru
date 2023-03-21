import { ReactNode } from "react";
import styles from './ButtonDownload.module.scss';


interface ButtonDownloadProps {
    link: string,
    text: string,
    children: ReactNode
}

export default function ButtonDownload({ link,text,children }: ButtonDownloadProps) {
    return (
        <a href={link} className={styles.download}>
            {text}
            {children}
        </a>
    );
}