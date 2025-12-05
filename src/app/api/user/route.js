import dbConnect, { collectionNameObj } from "@/sever/connect";
import { NextResponse } from "next/server";




export async function POST(request) {
    try {
       const {userInfo}=await request.json();
    
       const db=await dbConnect(collectionNameObj.userCollection)
       const check=await db.findOne({email:userInfo?.email})
          if(check) {
        return NextResponse.json(
            {error:"Email is required"},
            {status:400}
        )
       }
      await db.insertOne(userInfo)
     
    } catch (error) {
       return NextResponse.json(
        {error:"something went wrong",detail:error.message},
        {status:500}
       ) 
    }
}