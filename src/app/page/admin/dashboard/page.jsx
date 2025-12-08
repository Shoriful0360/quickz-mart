'use client'
import { Users, Package, ShoppingBag, DollarSign, BarChart3 } from "lucide-react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState("");

  const data = [
    { day: "Jan", revenue: 300, orders: 20 },
    { day: "Feb", revenue: 450, orders: 34 },
    { day: "Mar", revenue: 600, orders: 40 },
    { day: "Apr", revenue: 500, orders: 29 },
    { day: "May", revenue: 700, orders: 50 },
    { day: "June", revenue: 700, orders: 50 },
    { day: "July", revenue: 700, orders: 50 },
    { day: "Aug", revenue: 700, orders: 50 },
    { day: "Sept", revenue: 700, orders: 50 },
    { day: "Oct", revenue: 700, orders: 50 },
    { day: "Nov", revenue: 700, orders: 50 },
    { day: "Dec", revenue: 700, orders: 50 },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen p-6 transition-all duration-300">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-wide">Admin Dashboard</h1>
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-lg">Filter by Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-3 rounded-xl shadow bg-white dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { icon: <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />, title: "Total Users", value: "1200" },
          { icon: <Package className="w-10 h-10 text-blue-600 dark:text-blue-400" />, title: "Total Products", value: "350" },
          { icon: <ShoppingBag className="w-10 h-10 text-green-600 dark:text-green-400" />, title: "New Orders", value: "89" },
          { icon: <DollarSign className="w-10 h-10 text-yellow-500 dark:text-yellow-300" />, title: "Revenue", value: "$4,500" },
        ].map((card, index) => (
          <div
            key={index}
            className="shadow-xl rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] bg-white dark:bg-gray-800"
          >
            {card.icon}
            <div>
              <h2 className="text-lg font-semibold opacity-80">{card.title}</h2>
              <p className="text-3xl font-bold mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 dark:text-gray-100">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 /> Sales Overview
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={28}>
              <XAxis dataKey="day" stroke="currentColor" className="text-sm" />
              <YAxis stroke="currentColor" className="text-sm" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  borderRadius: "10px",
                  border: "1px solid #374151",
                  color: "white",
                }}
              />
              <Bar dataKey="revenue" fill="#6366F1" radius={[12, 12, 0, 0]} />
              <Bar dataKey="orders" fill="#10B981" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
