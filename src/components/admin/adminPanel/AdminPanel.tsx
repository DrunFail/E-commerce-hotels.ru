import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { deleteProduct, selectProduct } from '../../catalog/redux/productSlice';
import './AdminPanel.scss';







export default function AdminPanel() {
    const productList = useAppSelector(selectProduct);
    const dispatch = useAppDispatch();

    const handleDeleteProduct = (id: number) => {
dispatch(deleteProduct(id))
    }
  





    return (
        <div className='admin-panel'>
            <section>
                <Link to='add-new-product' target='_blank'>Добавить продукт</Link>
                {productList.map(product =>
                    <article key={product.code}>
                        <img src={product.url} alt={product.title} />
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.manufacturer}</p>
                        <p>{product.brand}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleDeleteProduct(product.code) }>delete</button>

                    </article>)}
            </section>


        </div>

    );
}