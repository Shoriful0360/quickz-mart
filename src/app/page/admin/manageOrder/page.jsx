'use client'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useEffect, useState } from 'react';

const Page = () => {

  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch('/api/order')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setStatuses(data.map(order => order.status)); // ←  স্ট্যাটাস সেট করা হচ্ছে
      });
  }, []);

  // Update status row-wise
const handleChange = async (rowIndex, value) => {

  const orderId = orders[rowIndex]._id;  // ← যেই order এর status change হচ্ছে

  // 1) UI তে immediate change দেখানোর জন্য:
  const updated = [...statuses];
  updated[rowIndex] = value;
  setStatuses(updated);

  // 2) Database এ update request পাঠানো:
  try {
     await fetch(`/api/order/by_id/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: value })
    });



  } catch (err) {
    console.log("Update Error:", err);
  }
};


  // Color function
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Processing":
        return "text-blue-500";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className='mt-10 max-w-7xl mx-auto'>
      <Table>
        <TableCaption>A List of Customer Order List</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order, rowIndex) => (
            <TableRow key={rowIndex}>

              <TableCell className="font-medium">#{order._id.slice(-5)}</TableCell>
              <TableCell>{order.userInfo.firstName} {order.userInfo.lastName}</TableCell>
              <TableCell>{order.userInfo.address}</TableCell>
              <TableCell>{order.userInfo.phone}</TableCell>
              <TableCell>Tk {order.price}</TableCell>

              <TableCell>
                <NativeSelect
              
                  value={statuses[rowIndex]}      // ← এখানে ঠিক value
                  onChange={(e) => handleChange(rowIndex, e.target.value)}
                  className={getStatusColor(statuses[rowIndex])} // ← row-wise color
                  disabled={statuses[rowIndex]==="Completed"}
                >
                  <NativeSelectOption value="Pending">Pending</NativeSelectOption>
                  <NativeSelectOption value="Processing">Processing</NativeSelectOption>
                  <NativeSelectOption value="Completed">Completed</NativeSelectOption>
                  <NativeSelectOption value="Cancelled">Cancelled</NativeSelectOption>
                </NativeSelect>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
