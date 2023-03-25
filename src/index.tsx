import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './styles/index.scss';
import CatalogPage from './pages/CatalogPage';
import CartList from './components/cart/cartList/CartList';
import Layout from './components/layout/Layout';
import ProductDetail from './components/catalog/productDetail/ProductDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "cart",
                element: <CartList />
            },
            {
                path: "catalog",
                element: <CatalogPage />,
            },

            {
                path: "catalog/:catalogId",
                element: <ProductDetail />
            }


        ]
    },
]);





const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

