import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Home from '../pages/Home';
import EditProduct from "../pages/EditProduct";
import CartView from "../pages/CartView";
import ProductList from "../pages/ProductList";
import UploadProduct from "../pages/UploadProduct";
import AdminView from "../pages/AdminView";
import NotFound from "../pages/NotFound";
import { productService } from "../Service/productService";


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
                        loader: fetchProducts,
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
                    {
                        path: '/EditProduct/:id',
                        element: <EditProduct/>,
                        loader: fetchProduct,   

                    },
                ]
            },

        ]
    },
]);

async function fetchProducts ({params}) {
    const productsData = await productService.getProducts();
    return {productsData, params};

}
async function fetchProduct({ params }) {
    const product = await productService.getProduct(params.id);
    return { product };
}