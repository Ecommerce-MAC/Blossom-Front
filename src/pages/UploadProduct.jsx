import { useState } from "react";
import '../Styles/UploadProduct.css';


function UploadProduct() {

    return (

      <form className="StyleForm mt-9 p-5"> 

        <h1 className=" mb-4 text-3xl"> UPLOAD PRODUCT</h1>  

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
          <input type="text" id="Description" className="shadow-sm bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
        </div>     

        <div className="mb-6">
          <label htmlFor="Image" className="block mb-2 text-sm font-medium dark:text-black">IMAGE</label>
          <input type="file" id="Image" accept="image/*" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="The product is..." required />
        </div> 


        <div className="mb-6">
          <label htmlFor="Price" className="block mb-2 text-sm font-medium dark:text-black">Price</label>
          <input type="number" id="Price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$" required />
        </div>      

        <div className="mb-6">
          <label htmlFor="Stock" className="block mb-2 text-sm font-medium dark:text-black">Stock</label>
          <input type="number" id="Stock" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="1" required />
        </div>        
           

        <div className="flex items-start mb-6 text-lg">

          <h2 className=" mr-3">Activate</h2>

          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className=" ml-3 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-5">Yes</label>

          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >No</label>
        </div>

        <div className="flex items-start mb-14 text-lg text-right">

          <h2 className=" mr-3">Public</h2>

          <div className="flex items-center h-5">
             <input id="terms" type="checkbox" value="" className=" ml-3 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-5">Yes</label>

          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>

          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >No</label>
        </div>      
        
        <button type="submit" className="text-dark  border  bg-orange border-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
    
    </form>
      
    );
    
  };
    

export default UploadProduct;
