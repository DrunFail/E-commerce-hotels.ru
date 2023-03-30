import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';


interface NavMenu {
    name: string,
    url: string
}


interface NavbarProps {
    menu: NavMenu[]
}


export default function Navbar({ menu }: NavbarProps) {
    return (
        <nav className={styles.nav}>
            <ul role='list'>
                {menu.map((elem, index) =>
                    <li key={index }>
                        <Link
                            to='#'
                            key={index}>
                            {elem.name}
                        </Link>
                    </li>)}
            </ul>
        </nav>
    );
}