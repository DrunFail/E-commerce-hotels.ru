import Logo from '../../UI/logo/Logo';
import styles from './Footer.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div><Logo href="/" /></div>
                <div>nav1</div>

                <div>nav2</div>
                <div>price-list</div>
                <div>contacts</div>
            </div>

        </footer>
    );
}