import { useState } from "react";
import './UploadProduct.css';

function UploadProduct() {

    return (

      <form className="StyleForm"> UPLOAD PRODUCT 

        <div className="mb-6">
          <label htmlFor="ProductName" className="block mb-2 text-sm font-medium dark:text-black">Product Name</label>
          <input type="text" id="ProductName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
        </div>     

        <div className="mb-6">
          <label htmlFor="Brand" className="block mb-2 text-sm font-medium dark:text-black">Brand</label>
          <input type="text" id="Brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="KiKo" required />
        </div>       

        <div className="mb-6">
          <label htmlFor="TypeProduct" className="block mb-2 text-sm font-medium dark:text-black">Type Product</label>
          <input type="text" id="TypeProduct" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Cream " required />
        </div>  

        <div className="mb-6">
          <label htmlFor="Description" className="block mb-2 text-sm font-medium dark:text-black">Description</label>
          <input type="text" id="Description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
        </div>     

        <div className="mb-6">
          <label htmlFor="Image" className="block mb-2 text-sm font-medium dark:text-black">IMAGE</label>
          <input type="text" id="Image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
        </div>   

         <div className="mb-6">
          <label htmlFor="Price" className="block mb-2 text-sm font-medium dark:text-black">Price</label>
          <input type="Value" id="Price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$" required />
        </div>           
           

        <div className="flex items-start mb-6">

          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>

        <button type="submit" className="text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir</button>
    </form>
      
    );
    
  };
    

export default UploadProduct;
