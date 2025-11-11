

import dbConnect, { collectionNameObj } from '@/sever/connect'
import { ObjectId } from 'mongodb'
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

export async function GET(req, { params }) {
  try {
    // 🔹 Extract id from URL
    const { id } = params;

    // 🔹 Connect to MongoDB
    const db = dbConnect(collectionNameObj.orderCollection);

    // 🔹 Convert to ObjectId and find one document
    const order = await db.findOne({ _id: new ObjectId(id) });

    if (!order) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    // 🔹 Return the order
    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}