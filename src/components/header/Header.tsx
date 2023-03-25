import './Header.scss';
import Callback from '../../assets/img/callback.png';
import { useResize } from '../../hooks/useResize';
import Sprite from '../../assets/img/sprite.svg';
import SpriteIcon from '../spriteIcon/SpriteIcon';
import ButtonCatalog from '../../UI/buttons/buttonCatalog/ButtonCatalog';
import ButtonDownload from '../../UI/buttons/buttonDownload/ButtonDownload';
import HeaderCurrentShop from '../headerCurrentShop/HeaderCurrentShop';
import HeaderEmailFeedback from '../headerEmailFeedback/HeaderEmailFeedback';
import Navbar from '../navbar/Navbar';
import Logo from '../../UI/logo/Logo';
import ButtonSearch from '../../UI/buttons/buttonSearch/ButtonSearch';
import SearchForm from '../../UI/forms/SearchForm';
import ButtonBurger from '../../UI/buttons/buttonBurger/ButtonBurger';
import CallbackBlock from '../callbackBlock/CallbackBlock';
import HeaderCartBlock from '../headerCartBlock/HeaderCartBlock';
import MobileButtonSearch from '../../UI/buttons/mobileButtonSearch/MobileButtonSearch';

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
    console.log(size)


    return (
        <header>
            <div className='header-container'>
                <div className='header-top'>
                    {size > 800 &&
                        <>

                            <HeaderCurrentShop address={'г. Кокчетав, ул. Ж. Ташенова 129Б'} description={'(Рынок Восточный)'}>
                                <SpriteIcon id={'location'} />
                            </HeaderCurrentShop>

                        <HeaderEmailFeedback imgStatus={true} />



                            <Navbar menu={nav_menu} />
                        </>}

                    {size <= 800 &&
                        <>
                            <ButtonBurger>
                                <SpriteIcon  id='burger' />
                            </ButtonBurger>

                            <Logo href='/' />

                            <HeaderCartBlock text={'Корзина'} linkUrl={'cart'} totalPrice={'12 478 ₸'}>
                                <SpriteIcon id={'cart'} />
                            </HeaderCartBlock>
                        </>
                    }

                </div>
            </div>
            <div className='header-container'>
                <div className='header-bottom'>
                    {size > 800 &&

                        <Logo href='/'  />
                    }

                    <ButtonCatalog text='Каталог'>
                        <SpriteIcon  id={'catalog'} />
                    </ButtonCatalog>



                    {size < 800 &&

                        <MobileButtonSearch text='Поиск'>
                            <SpriteIcon  id={'search'} />
                        </MobileButtonSearch>
                    }

                    {size > 800 &&
                        <>

                            <SearchForm>
                                <ButtonSearch >
                                    <SpriteIcon  id='search' />
                                </ButtonSearch>
                            </SearchForm>


                            <CallbackBlock />


                            <ButtonDownload color='orange'/>



                            <HeaderCartBlock text={'Корзина'} linkUrl={'cart'} totalPrice={'12 478 ₸'}>
                                <SpriteIcon  id={'cart'} />
                            </HeaderCartBlock>
                        </>}

                </div>
            </div>

        </header>
    );
}