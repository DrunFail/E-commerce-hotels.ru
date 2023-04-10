import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';


test('render navbar', () => {
    const nav_menu = [
        {
            name: 'О компании',
            url: ''
        },
        {
            name: 'Доставка и оплата',
            url: ''
        },
        {
            name: 'Возврат',
            url: ''
        },
        {
            name: 'Контакты',
            url: ''
        }
    ]



    render(
        <BrowserRouter>
            <Navbar menu={nav_menu} />
        </BrowserRouter>
            );

    const navbar = screen.getByRole('navigation');
    const li = screen.getAllByRole('listitem');

    expect(navbar).toBeInTheDocument();
    expect(li).toHaveLength(4);


})