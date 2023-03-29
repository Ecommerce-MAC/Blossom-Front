import React from "react";
import '../Styles/AdminView.css'
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../Handlers/productHandler";
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";



export default function Admin() {
     const {productsData} = useLoaderData(); 
    

    async function deleteProduct (id) {
        await productHandler.deleteProduct(id)
        console.log (id);
      }
    async function updateProduct (id, updatedProduct) {
        await productHandler.updateProduct(id, updatedProduct)
        console.log (id);
      }

    return ( 
        <div className="StyleTable relative overflow-x-auto shadow-md sm:rounded-lg mt-10 ml-3 mr-3">
         <>
                  <h1 className=" text-3xl mt-3 ml-5">Hello, "Admin"</h1>
                  <button className="text-green-500 bg-blue-700 hover:bg-pink-500 px-4 py-2 rounded" onClick={() => window.location.href='/UploadProduct'}>  Upload </button>
                 
                 <table className="mt-12 w-full text-sm text-left text-gray-500 dark:text-gray-400">

                    <thead className="text-m text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-alba">
                        <tr>
                               <th scope="col" className="px-6 py-3 font-medium text-gray-900"> <span className="sr-only">Image</span>  Image</th>
                               <th scope="col" className="px-6 py-3 font-medium text-gray-900">Id</th>
                                <th scope="col" className="px-6 py-3 font-medium text-gray-900">Name</th>
                                {/* <th scope="col" className="px-6 py-3 font-medium text-gray-900">Type Product</th>
                                <th scope="col" className="px-6 py-3 font-medium text-gray-900">Price</th> */}
                                <th scope="col" className="px-6 py-3 font-medium text-gray-900">Stock</th>
                                <th scope="col" className="px-6 py-3 font-medium text-gray-900"></th>
                        </tr>
                    </thead>
                 {productsData.map((productsData) => (
                    <tbody>
                        <tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-alba hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td className="w-32 p-4"><img src="" alt=""/></td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark">{productsData.id} </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark"> {productsData.name}</td>
                            {/* <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark"> {productsData.typeProduct}</td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark">{productsData.price} </td> */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark">{productsData.stock} </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-dark"> </td>
                            <button>
                            <td className="px-6 py-4">
                            <svg className="h-8 w-8 text-red-500 dark:text-red" onClick={() => deleteProduct(productsData.id)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </td>
                            </button> 
    
                            <Link to={`/EditProduct/${productsData.id}`}>
                            <td className="px-6 py-4">
                            <svg className=" dark:text-green h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
                            </td>
                            </Link>
                            
                            

                        </tr>
                    </tbody>
                  
                  
                    ))}
                </table>
        </>
        </div>
    )
 } 
      