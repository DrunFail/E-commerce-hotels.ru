import styles from './CallbackBlock.module.scss';
import CallbackImg from '../../../../assets/img/callback.png';


const callbackData = {
    phone: '+7 (777) 490-00-91',
    opening: 'время работы: 9:00-20:00',
    linkText: 'Заказать звонок',
    linkUrl: '#'
}


export default function CallbackBlock() {
    return (
        <div className={styles.callback }>
            <div className={styles['callback-content']}>
                <p>{callbackData.phone}</p>
                <p>{callbackData.opening}</p>
                <a href={callbackData.linkUrl }>{callbackData.linkText}</a>
            </div>

            <img src={CallbackImg} alt='operator' />
        </div>
    
    );
}