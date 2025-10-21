'use client'

import { useCart } from "@/app/hook/useCart";
import { useState, useEffect } from "react";

const CartPage = () => {
  // Example cart item (replace with localStorage or useCart hook)
  const carts=useCart()
  const [cartItems, setCartItems] = useState(carts);

  // Quantity increase
//   const increaseQty = (id) => {
//     const updatedCart = carts.map(item => {
//       if(item.id === id){
//         return {...item, quantity: item.quantity + 1};
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   }

  // Quantity decrease
//   const decreaseQty = (id) => {
//     const updatedCart = cartItems.map(item => {
//       if(item.id === id && item.quantity > 1){
//         return {...item, quantity: item.quantity - 1};
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   }

  // Calculate total price
  const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {carts.map(item => (
            <div key={item.id} className="flex flex-col md:flex-row items-center md:justify-between p-4 border rounded-lg shadow-sm">
              {/* Image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mb-2 md:mb-0"/>

              {/* Product Details */}
              <div className="flex-1 md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">Size: {item.size || "N/A"}</p>
                <p className="text-gray-500 line-through">{item.oldPrice} ৳</p>
                <p className="text-red-500 font-bold">{item.price} ৳</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center mt-2 md:mt-0 space-x-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 py-1 border rounded">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Item Total Price */}
              <div className="mt-2 md:mt-0 md:ml-4 font-bold text-lg">
                {item.price * item.quantity} ৳
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-4 text-2xl font-bold">
            Total: {totalPrice} ৳
          </div>

          {/* Checkout Button */}
          <div className="text-right mt-2">
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
