import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../fakeData/data.json';
import { ProductItem } from '../../catalog/interfaces/interfaces';
import './AdminPanel.scss';

const local = 'productList-hotels.ru';





export default function AdminPanel() {
    const [state, setState] = useState<ProductItem[]>(data);

    const handleDeleteProduct = (code: number) => {
        setState(state => state.filter(elem => elem.code !== code))
        localStorage.setItem(local, JSON.stringify(state));
    }





    return (
        <div className='admin-panel'>
            <section>
                <Link to='add-new-product' target='_blank'>Добавить продукт</Link>
                {state.map(elem =>
                    <article key={elem.code}>
                        <img src={elem.url} alt={elem.title} />
                        <p>{elem.title}</p>
                        <p>{elem.description}</p>
                        <p>{elem.manufacturer}</p>
                        <p>{elem.brand}</p>
                        <p>{elem.price}</p>
                        <button onClick={() => handleDeleteProduct(elem.code)}>delete</button>

                    </article>)}
            </section>


        </div>

    );
}