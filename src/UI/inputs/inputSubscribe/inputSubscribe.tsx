import ButtonArrowRight from '../../buttons/buttonArrowRight/ButtonArrowRight';
import styles from './InputSubscribe.module.scss';



export default function InputSubscribe() {
    return (

        <div className={styles.container}>
            <input className={styles.input} type='email' placeholder='Введите ваш E-mail' />
            <ButtonArrowRight />
        </div>
    );
}