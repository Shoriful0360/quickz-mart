

import dbConnect, { collectionNameObj } from '@/sever/connect'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'


export  async function POST(req) {

   try {

      const body = await req.json()

      const newOrder={
        ...body,
        status:'Pending'
      }
    const orders=await dbConnect(collectionNameObj.orderCollection)
    const result=await orders.insertOne(newOrder)
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

export async function GET() {
  try {

 


    // 🔹 Connect to MongoDB
    const db =await dbConnect(collectionNameObj.orderCollection);


 const orders=await db.find().toArray()

    if (!orders) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    // 🔹 Return the order
    return NextResponse.json(orders, { status: 200 });

  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}