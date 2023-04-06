import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../redux/store/store';
import ProductListItem from '../components/productListItem/ProductListItem';



test('render ProductListItem', () => {

    const item = {
        "url": "https://ir.ozone.ru/s3/multimedia-t/wc1000/6349017149.jpg",
        "title": "Соль для ванны с магнием",
        "volume": "Вес",
        "size": 3000,
        "sizeUnit": "г",
        "code": 401,
        "manufacturer": "Россия",
        "brand": "Апрель",
        "description": "Природный минерал, который впервые был добыт в Англии, в городе Эпсом, из горьких минеральных источников. Этот продукт состоит из сульфата магния на 99%, серы, воды и кислорода. Такое соединение химических элементов благотворно влияет на работу сердечно-сосудистой и нервной систем, улучшает сон и память, повышает концентрацию, очищает клетки от токсинов, снимает напряжение в мышцах, способствует лучшему усвоению питательных веществ, восполняет недостаток магния в организме. Такой уникальный состав английской соли позволяет назвать ее настоящим сокровищем для красоты.",
        "price": 479,
        "typeCare": ["Уход за телом"]
    }


    render(
        <BrowserRouter>
            <Provider store={store}>
                <ProductListItem item={item} />
            </Provider>
        </BrowserRouter>
    );

    const productItem = screen.getByRole('article');

    expect(productItem).toBeInTheDocument();


})