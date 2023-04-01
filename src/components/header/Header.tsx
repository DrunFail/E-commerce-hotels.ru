import './Header.scss';
import { useResize } from '../../hooks/useResize';
import ButtonCatalog from '../../UI/buttons/buttonCatalog/ButtonCatalog';
import ButtonDownload from '../../UI/buttons/buttonDownload/ButtonDownload';
import Logo from '../../UI/logo/Logo';
import ButtonSearch from '../../UI/buttons/buttonSearch/ButtonSearch';
import SearchForm from '../../UI/forms/SearchForm';
import ButtonBurger from '../../UI/buttons/buttonBurger/ButtonBurger';
import MobileButtonSearch from '../../UI/buttons/mobileButtonSearch/MobileButtonSearch';
import HeaderCurrentShop from './components/headerCurrentShop/HeaderCurrentShop';
import HeaderEmailFeedback from './components/headerEmailFeedback/HeaderEmailFeedback';
import HeaderCartBlock from './components/headerCartBlock/HeaderCartBlock';
import CallbackBlock from './components/callbackBlock/CallbackBlock';
import Navbar from './components/navbar/Navbar';
import MobileMenu from './components/mobileMenu/MobileMenu';
import { useState } from 'react';

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



export default function Header() {
    const size = useResize();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <header>
            <div className='header-container'>
                <div className='header-top'>
                    {size > 800 &&
                        <>

                            <HeaderCurrentShop />
                            <HeaderEmailFeedback imgStatus={true} />
                            <Navbar menu={nav_menu} />
                        </>}

                    {size <= 800 &&
                        <>
                            <ButtonBurger onClick={toggleMenu} status={showMobileMenu} />
                            <Logo />
                            <HeaderCartBlock />
                            {showMobileMenu && <MobileMenu />}
                        </>
                    }

                </div>
            </div>
            <div className='header-container'>
                <div className='header-bottom'>
                    {size > 800 &&

                        <Logo />
                    }

                    <ButtonCatalog />

                    {size < 800 &&
                        <MobileButtonSearch />
                    }

                    {size > 800 &&
                        <>

                            <SearchForm>
                                <ButtonSearch />
                            </SearchForm>

                            <CallbackBlock />

                            <ButtonDownload color='orange' />

                            <HeaderCartBlock />
                        </>}

                </div>
            </div>

        </header>
    );
}