import ButtonClose from "../../../UI/buttons/buttonClose/ButtonClose";
import ButtonDoubleCheck from "../../../UI/buttons/buttonDoubleCheck/ButtonDoubleCheck";
import styles from './OrderConfirmMessage.module.scss';


export default function OrderConfirmMessage() {
    return (
        <div className={styles.success }>
            <ButtonClose />
            <ButtonDoubleCheck />
            <h4>Спасибо за заказ</h4>
            <p>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>

    );
}