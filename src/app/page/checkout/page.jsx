
'use client'
import { useEffect, useState } from 'react';
import CheckoutForm from './component/CheckOutForm'
import OrderSummary from './component/OrderSummary';
import { useSearchParams } from 'next/navigation';

;

export default function CheckOut() {
const [totalProductPrice,setTotalProductPrice]=useState(0)
  const searchParams = useSearchParams();
  const buyId = searchParams.get('id');

const [product,setProducts]=useState(null)
 
useEffect(()=>{
fetch(`/api/products?id=${buyId}`)
.then(res=>res.json())
.then(data=>setProducts(data))
},[buyId])

  return (
    <div className='max-w-5xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-6 mt-10'>
     
         {/* order summary */}
   <div className='lg:order-2'>
      <OrderSummary setTotalProductPrice={setTotalProductPrice} Singleproduct={product} />
   </div>
     <div className='md:col-span-2  '>
        {/* form */}
           <CheckoutForm totalProductPrice={totalProductPrice} Singleproduct={product} />
     </div>
 
    </div>
  )
}