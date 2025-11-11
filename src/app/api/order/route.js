

import dbConnect, { collectionNameObj } from '@/sever/connect'
import { NextResponse } from 'next/server'


export  async function POST(req) {

   try {

      const body = await req.json()
    const orders=dbConnect(collectionNameObj.orderCollection)
    const result=await orders.insertOne(body)
    return NextResponse.json({
      message:"order created successfully",
      orderId:result.insertedId
    })
   } catch (error) {
    console.log("error creating order:",error)
    return NextResponse.json(
      {
      message:"Failed to create order"
    } ,
    {
      status:500
    }
  )
    
   }
}
