import styles from './ContactsBlock.module.scss';

const callbackData = {
    phone: '+7 (777) 490-00-91',
    opening: 'время работы: 9:00-20:00',
    linkText: 'Заказать звонок',
    linkUrl: '#'
}


export default function ContactsBlock() {
    return (
        <div className={styles.content}>
            <p>{callbackData.phone}</p>
            <p>{callbackData.opening}</p>
            <a href={callbackData.linkUrl}>{callbackData.linkText}</a>
        </div>
    );
}