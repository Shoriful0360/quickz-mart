import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty } from '../../redux/cartsSlice';

export default function OrderSummary() {
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [deliveryArea, setDeliveryArea] = useState('dhaka');
  const dhakaCharge = 50;
  const outsideCharge = 150;

  const increase = (id) => dispatch(increaseQty({ id }));
  const decrease = (id) => dispatch(decreaseQty({ id }));

  const subtotal = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharge = deliveryArea === 'dhaka' ? dhakaCharge : outsideCharge;
  const vatRate = 0;
  const vatAmount = subtotal * vatRate;
  const discount = subtotal * 0.05;
  const totalOrder = subtotal + deliveryCharge + vatAmount - discount;

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <h3 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900 dark:text-gray-100">
        Order Summary
      </h3>

      {/* Product list */}
      <div className="space-y-4">
        {carts.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-inner transition-colors"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
              <Image
                fill
                src={item.image}
                alt={item.name}
                className="object-cover rounded-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
              <p className="text-gray-600 dark:text-gray-300">Price: ৳ {item.price.toFixed(2)}</p>
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
            </div>
          </div>
        ))}
      </div>

      {/* Pricing details */}
      <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (5%)</span>
          <span>- ৳ {discount.toFixed(2)}</span>
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
