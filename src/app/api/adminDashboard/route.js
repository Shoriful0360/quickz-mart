import dbConnect, { collectionNameObj } from "@/sever/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userCollection = await dbConnect(collectionNameObj.userCollection);
    const productCollection = await dbConnect(collectionNameObj.productCollection);
    const orderCollection = await dbConnect(collectionNameObj.orderCollection);

    // 1️⃣ Total users
    const totalUsers = await userCollection.countDocuments();

    // 2️⃣ Total Products
    const totalProducts = await productCollection.countDocuments();

    // 3️⃣ Total Orders
    const totalOrders = await orderCollection.countDocuments();

    // 4️⃣ Total Revenue (Completed Orders)
    const revenueData = await orderCollection.aggregate([
      { $match: { status: "Completed" } },
      {
        $group: {
          _id: null,
          revenue: { $sum: "$price" }, 
        },
      },
    ]).toArray();

    const totalRevenue = revenueData[0]?.revenue || 0;

    // 5️⃣ Today's Orders
 const start = new Date();
start.setHours(0, 0, 0, 0);

const end = new Date();
end.setHours(23, 59, 59, 999);

const todaysOrders = await orderCollection.countDocuments({
  _id: {
    $gte: ObjectId.createFromTime(start.getTime() / 1000), // start of day
    $lte: ObjectId.createFromTime(end.getTime() / 1000),   // end of day
  },
  
});




    // 6️⃣ Monthly Chart Data (Revenue + Orders)
const monthlyData = await orderCollection.aggregate([
  { $match: { status: "Completed" } },

  {
    $project: {
      month: { $month: {$toDate:"$_id"} }, // 1–12
      price: 1,
    },
  },

  {
    $group: {
      _id: "$month",   // month number: 1=Jan, 2=Feb...
      revenue: { $sum: "$price" },
      orders: { $sum: 1 },
    },
  },

  { $sort: { _id: 1 } }
]).toArray();




const monthNames = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sept","Oct","Nov","Dec"
];

const formattedMonthly = monthNames.map((name, index) => {
  const found = monthlyData.find(m => m._id === index + 1);
  return {
    month: name,
    revenue: found?.revenue || 0,
    orders: found?.orders || 0,
  };
});


    return NextResponse.json(
      {
        users: totalUsers,
        products: totalProducts,
        orders: totalOrders,
        todayOrder: todaysOrders,
        revenue: totalRevenue,
        monthlyChart: formattedMonthly, // 👈 এখানে পাঠানো হলো
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

