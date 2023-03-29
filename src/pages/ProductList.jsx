import { useLoaderData} from "react-router-dom";
import React from "react";
import "../Styles/ProductList.css";


export default function ProductList() {
  const {productsData, params} = useLoaderData ()
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
 


  console.log (params)
 
const addToCart = async (product) => {
    console.log("cart product array", cartProducts);
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  }


  return (
     <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        
         <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsData.map((product) => {
            if (product.typeProduct == params.productType) {
              return ( 
                <a key={product.id} href={product.href} className="group">
              { <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>  }
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <h3 className="mt-4 text-sm text-gray-700">{product.typeProduct}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button  className="block w-full rounded-md bg px-3.5 py-2.5 text-center text-sm font-semibold text-dark shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => addToCart(product)}>
                ADD TO CART
              </button>
            </a> 

              )
            }
            

})}
        </div> 
      </div>
    </div>
  )
}
