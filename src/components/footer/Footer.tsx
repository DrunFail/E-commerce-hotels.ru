import { useResize } from '../../hooks/useResize';
import ButtonDownload from '../../UI/buttons/buttonDownload/ButtonDownload';
import ButtonTelegram from '../../UI/buttons/messengers/telegram/ButtonTelegram';
import ButtonWhatsapp from '../../UI/buttons/messengers/whatsapp/ButtonWhatsapp';
import InputSubscribe from '../../UI/inputs/inputSubscribe/inputSubscribe';
import Logo from '../../UI/logo/Logo';
import PaymentMethodsBlock from '../../UI/paymentMethodsBlock/PaymentMethodsBlock';
import ContactsBlock from '../contactsBlock/ContactsBlock';
import HeaderEmailFeedback from '../headerEmailFeedback/HeaderEmailFeedback';
import styles from './Footer.module.scss';


export default function Footer() {
    const size = useResize();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>

                        <Logo href="/" />
                        {size < 800 && <ButtonDownload color='orange'/>}
                        <p>Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</p>

                    </div>
                    <div className={styles.subscribe}>
                        <p>Подпишись на скидки и акции</p>

                        <InputSubscribe />
                    </div>

                    

                </div>
                
                <div className={styles.content}>
                    <nav role='navigation'>
                        <div>
                            <h3>Меню сайта:</h3>
                            <ul>
                                <li>О компании</li>
                                <li>Доставка и оплата</li>
                                <li>Возврат</li>
                                <li>Контакты</li>
                            </ul>

                        </div>

                        <div>
                            <h3>Категории:</h3>
                            <ul>
                                <li>Бытовая химия</li>
                                <li>Косметика и гигиена</li>
                                <li>Товары для дома</li>
                                <li>Товары для детей и мам</li>
                                <li>Посуда</li>
                            </ul>
                        </div>
                    </nav>
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