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
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </>
        )
      })}
      <p>Total Price: {totalPrice}</p>
      <button onClick={() => removeCartProducts()}>clear cart</button>
    </div>
  )
}

export default Cart

// function ShoppingCart() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.price;
//     });
//     return total.toFixed(2);
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price}{" "}
//             <button onClick={() => removeFromCart(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${calculateTotal()}</p>
//       <button onClick={() => setCartItems([])}>Clear Cart</button>
//       <hr />
//       <h2>Products</h2>
//       <ul>
//         <li>
//           Product A - $10 <button onClick={() => addToCart({ name: "Product A", price: 10 })}>Add to Cart</button>
//         </li>
//         <li>
//           Product B - $20 <button onClick={() => addToCart({ name: "Product B", price: 20 })}>Add to Cart</button>
//         </li>
//         <li>
//           Product C - $30 <button onClick={() => addToCart({ name: "Product C", price: 30 })}>Add to Cart</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default ShoppingCart;

/* function Cart() {

    return (
        <div>
           <h1>Shopping Cart</h1>
        </div>
    );
}

export default Cart;
 */
