import ButtonDownload from "../../../../UI/buttons/buttonDownload/ButtonDownload";
import { NAV_MENU } from "../../constants/constants";
import HeaderCurrentShop from "../headerCurrentShop/HeaderCurrentShop";
import HeaderEmailFeedback from "../headerEmailFeedback/HeaderEmailFeedback";
import MobileCallbackBlock from "../mobileCallbackBlock/MobileCallbackBlock";
import Navbar from "../navbar/Navbar";
import styles from './MobileMenu.module.scss';


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
                    <Navbar menu={NAV_MENU} />
                </div>
                <ButtonDownload color='orange' />

            </div>
        </div>
    )
}