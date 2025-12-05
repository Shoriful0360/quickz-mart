import dbConnect, { collectionNameObj } from "@/sever/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    // 🔹 Extract id from URL
    const { email } =await params;

    // 🔹 Connect to MongoDB
    const db =await dbConnect(collectionNameObj.userCollection);

    // 🔹 Convert to ObjectId and find one document
    const user = await db.findOne({email })



    // 🔹 Return the order
    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
