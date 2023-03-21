import styles from './Navbar.module.scss';


interface NavMenu {
    name: string,
    url: string
}


interface NavbarProps {
    menu: NavMenu[]
}


export default function Navbar({ menu }:NavbarProps) {
    return (
        <nav className={styles.nav}>
            <ul role='list'>
                {menu.map((elem, index) => <a key={index}>{elem.name}</a>)}
            </ul>
        </nav>
    );
}