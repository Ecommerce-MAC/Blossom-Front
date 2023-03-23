import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Home from '../pages/Home';

import CartView from "../pages/CartView";
import ProductList from "../pages/ProductList";
import UploadProduct from "../pages/UploadProduct";
import AdminView from "../pages/AdminView";
import NotFound from "../pages/NotFound";
import { ProductService } from "../Service/ProductService";

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
                        path: '/ProductList/:productType',
                        element: <ProductList/>,
                        loader: fetchProducts,
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

async function fetchProducts ({params}) {
    const productsData = await ProductService.getProducts();
    return {productsData, params};


}