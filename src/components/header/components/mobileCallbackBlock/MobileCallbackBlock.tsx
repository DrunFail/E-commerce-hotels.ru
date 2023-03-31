import SpriteIcon from '../../../spriteIcon/SpriteIcon';
import styles from './MobileCallbackBlock.module.scss';


const callbackData = {
    phone: '+7 (777) 490-00-91',
    opening: 'время работы: 9:00-20:00',
    linkText: 'Заказать звонок',
    linkUrl: '#'
}


export default function MobileCallbackBlock() {

    return (
        <div className={styles.content}>
            <div className={styles.image }>
                <SpriteIcon id='phone' />
                <p>Отдел продаж</p>
                <p>{callbackData.phone}</p>
                <p>{callbackData.opening}</p>
            </div>
            <div className={styles.phone}>
                <SpriteIcon id='orange-phone' />
                <a href={callbackData.linkUrl}>

                    {callbackData.linkText}</a>
            </div>
            
        </div>
    );
}
