import { useResize } from '../../hooks/useResize';
import ButtonDownload from '../../UI/buttons/buttonDownload/ButtonDownload';
import ButtonTelegram from '../../UI/buttons/messengers/telegram/ButtonTelegram';
import ButtonWhatsapp from '../../UI/buttons/messengers/whatsapp/ButtonWhatsapp';
import InputSubscribe from '../../UI/inputs/inputSubscribe/inputSubscribe';
import Logo from '../../UI/logo/Logo';
import HeaderEmailFeedback from '../header/components/headerEmailFeedback/HeaderEmailFeedback';
import ContactsBlock from './components/contactsBlock/ContactsBlock';
import NavBlock from './components/navBlock/NavBlock';
import PaymentMethodsBlock from './components/paymentMethodsBlock/PaymentMethodsBlock';
import styles from './Footer.module.scss';


export default function Footer() {
    const size = useResize();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Logo />
                        {size < 800 &&
                            <ButtonDownload color='orange' />}

                        <p>Компания «Султан» — снабжаем розничные
                            магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской
                            области</p>

                    </div>
                    <div className={styles.subscribe}>
                        <p>Подпишись на скидки и акции</p>
                        <InputSubscribe />
                    </div>

                    

                </div>
                
                <div className={styles.content}>

                    <NavBlock />

                    <div className={styles.priceList}>
                        {size < 800 ||
                            <>
                                <h3>Скачать прайс-лист:</h3>
                                <ButtonDownload color='orange'/>
                            </>}

                        <div className={styles.messengers}>
                            <p>Связь в мессенджерах:</p>
                            <ul>
                                <li><ButtonWhatsapp /></li>
                                <li><ButtonTelegram /></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <h3>Контакты:</h3>
                            <ContactsBlock />
                            <HeaderEmailFeedback imgStatus={false} />
                            <PaymentMethodsBlock />
                    </div>
                </div>
            </div>

        </footer>
    );
}