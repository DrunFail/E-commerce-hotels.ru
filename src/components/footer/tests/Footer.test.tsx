import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';


test('render Footer', () => {


    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );

    const footer = screen.getByRole('contentinfo', { name: "" });

    expect(footer).toBeInTheDocument();

})