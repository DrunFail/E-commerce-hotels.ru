import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ButtonRemove from '../../../UI/buttons/buttonRemove/ButtonRemove';
import { deleteProduct} from '../../catalog/redux/productSlice';
import { selectProduct } from '../../catalog/redux/selectors';
import './AdminPanel.scss';

export default function AdminPanel() {
    const productList = useAppSelector(selectProduct);
    const dispatch = useAppDispatch();

    const handleDeleteProduct = (id: number) => {
        dispatch(deleteProduct(id))
    }


    return (
        <div className='admin-panel'>
            <Link to='add-new-product' target='_blank'>Добавить продукт</Link>
            <table>
                <thead>
                    <tr>
                        <th colSpan={7}>Список товаров</th>
                    </tr>
                    <tr>
                        <td>Изображение</td>
                        <td>Название</td>
                        <td>Описание</td>
                        <td>Производитель</td>
                        <td>Брэнд</td>
                        <td>Цена</td>
                        <td>Действия</td>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(product =>
                        <tr key={product.code}>
                            <td> <img src={product.url} alt={product.title} /></td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.manufacturer}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td>
                                <ButtonRemove onClick={() => handleDeleteProduct(product.code)} />
                                <Link to={ `edit-product/${product.code}`}>edit</Link>
                            </td>
                        </tr>)}

                </tbody>
            </table>
            <section>






            </section>


        </div>

    );
}