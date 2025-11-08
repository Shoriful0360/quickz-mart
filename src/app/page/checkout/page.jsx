
'use client'
import { useState } from 'react';
import CheckoutForm from './component/CheckOutForm'
import OrderSummary from './component/OrderSummary';
;

export default function CheckOut() {
const [totalProductPrice,setTotalProductPrice]=useState(0)

 
     
  return (
    <div className='max-w-5xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-6 mt-10'>
     <div className='md:col-span-2 order-2  '>
        {/* form */}
           <CheckoutForm totalProductPrice={totalProductPrice} />
     </div>
     {/* order summary */}
   <div className='lg:order-2'>
      <OrderSummary setTotalProductPrice={setTotalProductPrice} />
   </div>
    </div>
  )
}
