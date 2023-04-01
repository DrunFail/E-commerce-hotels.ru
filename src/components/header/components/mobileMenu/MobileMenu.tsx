import ButtonDownload from "../../../../UI/buttons/buttonDownload/ButtonDownload";
import ContactsBlock from "../../../footer/components/contactsBlock/ContactsBlock";
import CallbackBlock from "../callbackBlock/CallbackBlock";
import HeaderCurrentShop from "../headerCurrentShop/HeaderCurrentShop";
import HeaderEmailFeedback from "../headerEmailFeedback/HeaderEmailFeedback";
import MobileCallbackBlock from "../mobileCallbackBlock/MobileCallbackBlock";
import Navbar from "../navbar/Navbar";
import styles from './MobileMenu.module.scss';

const nav_menu = [
    {
        name: 'О компании',
        url: ''
    },
    {
        name: 'Доставка и оплата',
        url: ''
    },
    {
        name: 'Возврат',
        url: ''
    },
    {
        name: 'Контакты',
        url: ''
    }
]




export default function MobileMenu() {
    return (
        <div className={styles.container }>
            <div className={styles.mobileHeader}>
                <HeaderCurrentShop />
                <HeaderEmailFeedback imgStatus={true} />
                <MobileCallbackBlock />
                <div className={styles.line}></div>
                <div className={styles.menu}>
                    <p>Меню сайта:</p>
                    <Navbar menu={nav_menu} />
                </div>
                <ButtonDownload color='orange' />

            </div>
        </div>
    )
}