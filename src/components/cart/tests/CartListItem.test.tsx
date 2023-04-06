import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from '../../../redux/store/store';
import CartListItem from '../components/cartListItem/CartListItem';


test('render CartListItem', () => {

    const elem = {
        code: 401,
        count: 2
    }


    render(
        <Provider store={store}>
            <CartListItem elem={elem} />);
        </Provider>
    );

    const cartItem = screen.getByRole('article');
    const cartItemTitle = screen.getByTestId('cart-item-title');
    const buttons = screen.getAllByRole('button');
    
    expect(cartItem).toBeInTheDocument();
    expect(cartItemTitle.textContent).toBe("Апрель Соль для ванны с магнием");
    expect(buttons).toHaveLength(3);
   
})