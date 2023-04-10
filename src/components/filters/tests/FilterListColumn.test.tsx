import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../redux/store/store';
import FilterListColumn from '../components/filterListColumn/FilterListColumn';



test('render Footer', () => {

    const dataList = [ "filter", "another filter"]
        


    render(
        <Provider store={store }>
        <BrowserRouter>
            <FilterListColumn nameFilter={'filter'} dataList={dataList} />
            </BrowserRouter>
        </Provider>
    );

    const filter = screen.getAllByRole('radio');


    expect(filter).toHaveLength(2);
    expect(filter[0]).not.toBeChecked();

})