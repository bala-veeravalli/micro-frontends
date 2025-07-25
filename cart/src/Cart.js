import React, { useState, useEffect } from "react";
import eventBus from "./eventBus";

const Cart = () => {
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      eventBus.on("addToCart", (product) => {
         setCartItems((prevItems) => [...prevItems, product]);
      });

      return () => {
         eventBus.off("addToCart");
      };
   }, []);

   return (
      <div>
         <h2>Shopping Cart</h2>
         {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
         ) : (
            <ul>
               {cartItems.map((item, index) => (
                  <li key={index}>
                     {item.name} - ${item.price}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default Cart;
