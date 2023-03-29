import React, { useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <>
          
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          {/* <img src= /> */}
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
              <p className="mt-1 text-xs text-gray-700">{product.typeProduct}</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        
              <div className="flex items-center space-x-4">
                <p className="text-sm">{product.price}</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
          </>
        )
      })}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">{totalPrice}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{totalPrice}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="cardbutton m-16 mt-3 mb-3 rounded-lg bg-orange px-3.5 py-2.5 text-xs font-thin shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Check out</button>
        <button className="cardbutton m-16 mt-3 mb-3 rounded-lg bg-orange px-3.5 py-2.5 text-xs font-thin shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => removeCartProducts()}>Clear cart</button>
      </div>
    </div>
  )
}
 
export default Cart
