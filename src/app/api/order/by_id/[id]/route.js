import dbConnect, { collectionNameObj } from "@/sever/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const { status } = await req.json();
        const db = await dbConnect(collectionNameObj.orderCollection);
        const result = await db.updateOne(
            { _id: new ObjectId(id) },
            { $set: { status } }
        )
        return NextResponse.json(
            {
                message: "Status Update", result
            },
            { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error updating", error: error.message },
            { status: 500 }
        )
    }

}