import dbConnect, { collectionNameObj } from "@/sever/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    // 🔹 Extract id from URL
    const { email } =await params;

    // 🔹 Connect to MongoDB
    const db =await dbConnect(collectionNameObj.orderCollection);

    // 🔹 Convert to ObjectId and find one document
    const order = await db.find({ 'userInfo.email': email }).sort({_id:-1}).toArray();

    if (order.length===0) {
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