import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../redux/store/store';
import FilterListRow from '../components/filterListRow/FilterListRow';




test('render Footer', () => {

    const dataList = ["filter", "another filter"]



    render(
        <Provider store={store}>
            <BrowserRouter>
                <FilterListRow  dataList={dataList} />
            </BrowserRouter>
        </Provider>
    );

    const filter = screen.getAllByRole('radio');


    expect(filter).toHaveLength(2);
    expect(filter[0]).not.toBeChecked();

})