import React, { useState } from 'react'

export default function OrderSummary() {
      const [order, setOrder] = useState({
        product: {
          name: "Product ABC",
          image: "https://plus.unsplash.com/premium_photo-1755889381455-ba9accf067cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
          price: 2500,
        },
        quantity: 1,
        shippingCharge: 100,
        discount: 0,
        vatRate: 0.05, // 5%
      });

        // Computations
  const subtotal = order.product.price * order.quantity;
  const vatAmount = subtotal * order.vatRate;
  const totalOrder = subtotal + order.shippingCharge + vatAmount - order.discount;
    
      
  return (
    <div>
        
           <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={order.product.image}
              alt={order.product.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">{order.product.name}</p>
              <p>৳ {order.product.price}</p>
              <p>Qty:
                <span onClick={()=>handleQuantity('-')} className='border px-2'>-</span>
                <span className='border px-2'>{order?.quantity}</span>
                <span onClick={()=>handleQuantity('-')} className='border px-2'>+</span>
              </p>
            </div>
          </div>

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>৳ {order.shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>- ৳ {order.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT ({(order.vatRate * 100).toFixed(1)}%)</span>
              <span>৳ {vatAmount.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>৳ {totalOrder.toFixed(2)}</span>
            </div>
            
          </div>
        </div>
    </div>
  )
}
