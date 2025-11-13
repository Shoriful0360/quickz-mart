'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, removeFromCart } from '../../redux/cartsSlice';
import { useSearchParams } from 'next/navigation';

export default function OrderSummary({ setTotalProductPrice,Singleproduct }) {
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [deliveryArea, setDeliveryArea] = useState('dhaka');
  const [products, setProducts] = useState([]); // will store either cart array or single fetched product
  const searchParams = useSearchParams();
  const buyId = searchParams.get('id');
  const quantity=searchParams.get('quantity')


  const dhakaCharge = 50;
  const outsideCharge = 150;
// upate product quantity and price
  const increase = (id) => dispatch(increaseQty({ id }));
  const decrease = (id) => dispatch(decreaseQty({ id }));
  const removeItem = (id) => dispatch(removeFromCart({ id }));

  // 🔹 Fetch logic: if buyId exists, fetch single product; else use Redux cart
  useEffect(() => {
    async function loadData() {
      if (Singleproduct) {
   

        // convert single object to array for consistent rendering
        setProducts([{ ...Singleproduct, quantity: quantity }]);
      } else {
        setProducts(carts);
      }
    }
    loadData();
  }, [Singleproduct, carts]);

  // 🔹 subtotal calculation
  const subtotal = products.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const deliveryCharge = deliveryArea === 'dhaka' ? dhakaCharge : outsideCharge;
  const vatRate = 0;
  const vatAmount = subtotal * vatRate;
  const discount = subtotal * 0.05;
  const totalOrder = subtotal + deliveryCharge + vatAmount - discount;

  useEffect(() => {
    setTotalProductPrice(totalOrder);
  }, [totalOrder]);

  if (products.length === 0) return <p className="text-center mt-5">No products found.</p>;

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <h3 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900 dark:text-gray-100">
        Order Summary
      </h3>

      {/* Product list */}
      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item._id || item.id}
            className="flex relative gap-4 items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-inner transition-colors"
          >
            {!buyId && (
              <button
                onClick={() => removeItem(item.id)}
                className="absolute z-50 -top-2 right-0 text-red-500 text-2xl font-bold"
              >
                ×
              </button>
            )}
            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
              <Image
                fill
                src={item.image || item.img}
                alt={item.name}
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Price: ৳ {(item.price ||0).toFixed(2)}
              </p>

              {!buyId && (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decrease(item.id)}
                    className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increase(item.id)}
                    className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing details */}
      <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳ {(subtotal ||0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (5%)</span>
          <span>- ৳ {(discount ||0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT ({(vatRate * 100).toFixed(1)}%)</span>
          <span>৳ {vatAmount.toFixed(2)}</span>
        </div>

        {/* Delivery selection */}
        <div className="mt-4">
          <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
            Delivery Area
          </label>
          <select
            className="w-full border rounded-md p-2 text-gray-700 dark:text-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
            value={deliveryArea}
            onChange={(e) => setDeliveryArea(e.target.value)}
          >
            <option value="dhaka">Dhaka</option>
            <option value="outside">Outside Dhaka</option>
          </select>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Delivery Charge: ৳ {deliveryCharge.toFixed(2)}
          </p>
        </div>

        <hr className="my-3 border-gray-300 dark:border-gray-600" />

        <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-gray-100">
          <span>Total</span>
          <span>৳ {totalOrder.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
