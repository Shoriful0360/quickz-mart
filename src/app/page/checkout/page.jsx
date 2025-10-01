'use client'
import React, { useState } from 'react'
import CheckoutForm from './component/CheckOutForm'
import OrderSummary from './component/OrderSummary';

export default function CheckOut() {
    
      const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        district: "",
        thana: "",
        address: "",
        orderNote: "",
        coupon: "",
        paymentMethod: "cod", // or "op"
      });
  return (
    <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10'>
     <div className='md:col-span-2'>
        {/* form */}
           <CheckoutForm form-={form} setForm={setForm}/>
     </div>
     {/* order summary */}
     <OrderSummary form={form}/>
    </div>
  )
}
