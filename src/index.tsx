import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './styles/index.scss';
import CatalogPage from './components/catalog/pages/CatalogPage';
import CartList from './components/cart/cartList/CartList';
import Layout from './components/layout/Layout';
import ProductDetail from './components/catalog/components/productDetail/ProductDetail';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AdminPanel from './components/admin/adminPanel/AdminPanel';
import AddNewProduct from './components/admin/addNewProduct/AddNewProduct';

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
                path: "kosmetika-i-gigiena",
                element: <CatalogPage />,
            },

            {
                path: "kosmetika-i-gigiena/:categoryId",
                element: <ProductDetail />
            },
            {
                path: "admin",
                element: <AdminPanel />
            },
               
                    {
                        path: 'admin/add-new-product',
                    element: <AddNewProduct />}
                
            


        ]
    },
]);





const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);

