import { useState } from "react";
import ButtonBurger from "../../../../UI/buttons/buttonBurger/ButtonBurger";
import ButtonCatalog from "../../../../UI/buttons/buttonCatalog/ButtonCatalog";
import MobileButtonSearch from "../../../../UI/buttons/mobileButtonSearch/MobileButtonSearch";
import HorizontalLine from "../../../../UI/line/HorizontalLine";
import Logo from "../../../../UI/logo/Logo";
import HeaderCartBlock from "../../components/headerCartBlock/HeaderCartBlock";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import styles from './MobileHeader.module.scss';


export default function MobileHeader() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }


    return (
        <header className={styles.header}>

            <div className={styles.header_top}>
                <ButtonBurger onClick={toggleMenu} status={showMobileMenu} />
                <Logo />
                <HeaderCartBlock />
                {showMobileMenu && <MobileMenu />}
            </div>

            <HorizontalLine />

            <div className={styles.header_bottom}>
                <ButtonCatalog />
                <MobileButtonSearch />
            </div>

            <HorizontalLine />
        </header>


    );
}