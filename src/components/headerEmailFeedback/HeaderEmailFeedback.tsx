import { ReactNode } from 'react';
import styles from './HeaderEmailFeedback.module.scss';

interface HeaderEmailFeedbackProps {
    children: ReactNode,
    email: string,
    description: string
}


export default function HeaderEmailFeedback({children, email, description }: HeaderEmailFeedbackProps) {
    return (
        <div className={styles.feedback}>
            {children}
            <p>{email}</p>
            <p>{description}</p>
        </div>
    );
}