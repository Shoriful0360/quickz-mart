import dbConnect, { collectionNameObj } from "@/sever/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const collection=await dbConnect(collectionNameObj.productCollection)
    const product=await collection.findOne({_id:new ObjectId(id)})


    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
