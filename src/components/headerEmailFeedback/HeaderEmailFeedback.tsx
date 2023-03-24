
import SpriteIcon from '../spriteIcon/SpriteIcon';
import styles from './HeaderEmailFeedback.module.scss';

interface HeaderEmailFeedbackProps {
    imgStatus: boolean
}


const data = {
    email: 'opt.sultan@mail.ru',
    description: 'На связи в любое время'
}



export default function HeaderEmailFeedback({imgStatus }: HeaderEmailFeedbackProps) {
    return (
        <div className={styles[imgStatus ? 'feedback' : 'feed-no-image']}>
            {imgStatus && <SpriteIcon id='mail' />}
            <p>{data.email}</p>
            <p>{data.description}</p>
        </div>
    );
}