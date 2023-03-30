import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export default function ErrorPage() {
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Указанная страница не найдена</p>
            <Link to='/kosmetika-i-gigiena'>Перейти в каталог</Link>
        </div>
    );
}