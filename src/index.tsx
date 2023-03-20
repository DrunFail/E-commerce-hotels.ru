import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/index.scss';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
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

