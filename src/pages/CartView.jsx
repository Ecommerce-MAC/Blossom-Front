import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={() => setCartItems([])}>Clear Cart</button>
      {/* <hr />
      <h2>Products</h2>
      <ul>
        <li>
          Product A - $10 <button onClick={() => addToCart({ name: "Product A", price: 10 })}>Add to Cart</button>
        </li>
        <li>
          Product B - $20 <button onClick={() => addToCart({ name: "Product B", price: 20 })}>Add to Cart</button>
        </li>
        <li>
          Product C - $30 <button onClick={() => addToCart({ name: "Product C", price: 30 })}>Add to Cart</button>
        </li>
      </ul> */}
    </div>
  );
}

export default ShoppingCart;

/* function Cart() {

    return (
        <div>
           <h1>Shopping Cart</h1>
        </div>
    );
}

export default Cart;
 */
