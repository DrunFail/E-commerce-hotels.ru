import ButtonCatalog from "../../../../UI/buttons/buttonCatalog/ButtonCatalog";
import ButtonDownload from "../../../../UI/buttons/buttonDownload/ButtonDownload";
import ButtonSearch from "../../../../UI/buttons/buttonSearch/ButtonSearch";
import SearchForm from "../../../../UI/forms/SearchForm";
import HorizontalLine from "../../../../UI/line/HorizontalLine";
import Logo from "../../../../UI/logo/Logo";
import CallbackBlock from "../../components/callbackBlock/CallbackBlock";
import HeaderCartBlock from "../../components/headerCartBlock/HeaderCartBlock";
import HeaderCurrentShop from "../../components/headerCurrentShop/HeaderCurrentShop";
import HeaderEmailFeedback from "../../components/headerEmailFeedback/HeaderEmailFeedback";
import Navbar from "../../components/navbar/Navbar";
import { NAV_MENU } from "../../constants/constants";
import styles from './DesktopHeader.module.scss';


export default function DesktopHeader() {
    return (
        <header className={styles.header}>

            <div className={styles.header_top} >
                <HeaderCurrentShop />
                <HeaderEmailFeedback imgStatus={true} />
                <Navbar menu={NAV_MENU} />
            </div>

            <HorizontalLine />

            <div className={styles.header_bottom} >
                <Logo />
                <ButtonCatalog />
                <SearchForm>
                    <ButtonSearch />
                </SearchForm>
                <CallbackBlock />
                <ButtonDownload color='orange' />
                <HeaderCartBlock />
            </div>

            <HorizontalLine />

        </header>

    );
}