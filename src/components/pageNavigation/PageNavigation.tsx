import { Link } from "react-router-dom";
import './PageNavigation.scss';

export default function PageNavigation() {
    return (
        <div className='page-navigation'>
            <Link to='kosmetika-i-gigiena'>Косметика и гигиена</Link>
            <Link to='admin'>Админ-панель</Link>
        </div>

    );
}