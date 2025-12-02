"use client";
import PrivateRoute from "@/app/route/PrivateRoute";
import { useEffect, useState } from "react";
import { FaBoxOpen, FaSpinner, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { useSelector } from "react-redux";


const gradientMap = {
  Total: "linear-gradient(135deg, #00C9FF 0%, #0072ff 100%)", // blue tone
    Pending: "linear-gradient(135deg, #A770EF 0%, #FDB99B 100%)",
  Processing: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", // yellow tone
  Completed: "linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)", // green tone
  Cancelled: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)", // red tone
};


export default function CustomerDashboard() {
const {user,loading}=useSelector((state)=>state.auth)
const[products,setProducts]=useState([])

useEffect(() => {
  if (!user?.email) return;

  fetch(`/api/order/${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log("API Response =", data);

      // Always ensure `products` is an array
      if (Array.isArray(data)) {
        setProducts(data);
      } else if (Array.isArray(data.orders)) {
        setProducts(data.orders);
      } else {
        setProducts([]); // Fallback
      }
    });
}, [user?.email]);
if(loading) return <p>Loading ....</p>

const stats = [
  { title: "Total Orders", value:(products?.length || 0), icon: <FaBoxOpen size={28} />, type: "Total" },
   { title: "Pending", value: (products?.filter(p=>p.status==="Pending")?.length || 0), icon: <FaClock size={28} />, type: "Pending" }, 
  { title: "Processing",value: (products?.filter(p=>p.status==="Processing")?.length || 0), icon: <FaSpinner size={28} className="animate-spin-slow" />, type: "Processing" },
  { title: "Completed", value: (products?.filter(p=>p.status==="Completed")?.length || 0), icon: <FaCheckCircle size={28} />, type: "Completed" },
  { title: "Cancelled", value: (products?.filter(p=>p.status==="Cancelled")?.length || 0), icon: <FaTimesCircle size={28} />, type: "Cancelled" },
];
console.log('products',products)
  return (
    <PrivateRoute>
      <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#0b1320] dark:text-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide dark:text-gray-100 text-gray-900">
        🛍️ Customer Dashboard
      </h1>

      {/* 🔹 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="relative p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 group"
            style={{ background: gradientMap[item.type] }}
          >
            <div className="bg-white/80 dark:bg-[#0f172acc] backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center gap-4 py-10 px-6 text-center h-full group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all">
              <div className="p-4 bg-black/5 dark:bg-white/10 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h2 className="text-lg font-medium tracking-wide text-gray-800 dark:text-gray-200">
                {item.title}
              </h2>
              <p className="text-3xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-widest">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Recent Orders Table */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-200">
          Recent Orders 📦
        </h2>
        <div className="bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 dark:border-white/10">
          <table className="w-full text-left text-gray-800 dark:text-gray-200">
            <thead className="bg-gray-200/70 dark:bg-white/10 uppercase text-sm tracking-wider">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((order, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-100/70 dark:hover:bg-white/10 transition-all duration-200 border-b border-gray-300 dark:border-white/10"
                >
                  <td className="py-3 px-4">#{order._id.slice(-5)}</td>
              <td className="py-3 px-4">
  {Array.isArray(order?.ProductsInfo) 
    ? order.ProductsInfo.map(item => item?.name).join(", ")
    : order?.ProductsInfo?.name || "No products"}
</td>
                  <td className="py-3 px-4">Tk{order.price}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-500/20 text-green-700 dark:text-green-300"
                          : order.status === "Processing"
                          ? "bg-yellow-400/20 text-yellow-700 dark:text-yellow-300"
                          : "bg-red-500/20 text-red-700 dark:text-red-300"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                   <td className="text-gray-500 dark:text-gray-400">
      {new Date(parseInt(order._id.substring(0, 8), 16) * 1000).toLocaleDateString("en-GB")}
    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
     

    </div>
    </PrivateRoute>
  );
}
