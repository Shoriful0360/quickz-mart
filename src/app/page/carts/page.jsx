'use client'



import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/cartsSlice";
import Image from "next/image";
import Link from "next/link";
// import { addToCart } from "@/app/page/redux/cartsSlice";
const CartPage = () => {
  const carts = useSelector(state => state.cart.items)
  const dispatch=useDispatch()
 


  // Quantity increase
  const increase = (id) => {
 dispatch(increaseQty({id}))
  }

  // Quantity decrease
  const decrease = (id) => {
   dispatch(decreaseQty({id}))
   
  }
const removeItem=(id)=>{
  dispatch(removeFromCart({id}))
}
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
         <div
  key={item.id}
  className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm relative"
>
  {/* Remove Button */}
  <button
    onClick={() => removeItem(item.id)}
    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
  >
    ×
  </button>

  {/* Image */}
 <div className="relative w-24 h-24">
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover rounded-md"
    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
    priority
  />
</div>

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
      onClick={() => decrease(item.id)}
      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    >
      -
    </button>
    <span className="px-3 py-1 border rounded">{item.quantity}</span>
    <button
      onClick={() => increase(item.id)}
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
            <Link href={'/page/checkout'}>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Proceed to Checkout
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
