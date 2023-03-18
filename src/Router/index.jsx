import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Home from '../pages/Home';
import ProductDetail from "../pages/ProductDetail";
import CartView from "../pages/CartView";
import ProductList from "../pages/ProductList";
import UploadProduct from "../pages/UploadProduct";
import AdminView from "../pages/AdminView";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path: '/AdminView',
                        element: <AdminView/>,
                    },
                    {
                        path: "/CartView",
                        element: <CartView/>,
                       

                    },
                    {
                        path: '/ProductDetail',
                        element: <ProductDetail/>,
                     

                    },
                    {
                        path: '/ProductList',
                        element: <ProductList/>,
                    },
                    {
                        path: '/UploadProduct',
                        element: <UploadProduct/>,
                        

                    },
                  
                ]
            },

        ]
    },
]);

