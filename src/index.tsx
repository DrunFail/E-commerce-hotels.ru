import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, } from "react-router-dom";
import './styles/index.scss';
import CatalogPage from './components/catalog/pages/CatalogPage';
import Layout from './components/layout/Layout';
import ProductDetail from './components/catalog/components/productDetail/ProductDetail';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AdminPanel from './components/admin/adminPanel/AdminPanel';
import AddNewProduct from './components/admin/addNewProduct/AddNewProduct';
import CartList from './components/cart/components/cartList/CartList';
import PageNavigation from './components/pageNavigation/PageNavigation';
import ErrorPage from './components/errorPage/ErrorPage';
import EditProduct from './components/admin/editProduct/EditProduct';

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <PageNavigation />
            },
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
                element: <AdminPanel />,
                children: [{
                    path: 'admin/edit-product/:editProductId',
                    element: <EditProduct />
                }]
            },

            {
                path: 'admin/add-new-product',
                element: <AddNewProduct />
            },
            {
                path: 'admin/edit-product/:editProductId',
                element: <EditProduct />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
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

