'use client'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useEffect, useState } from 'react';

const Page = () => {

 const invoices = [
  { invoice: "INV001", status: "Pending", totalAmount: "$250.00" },
  { invoice: "INV007", status: "Processing", totalAmount: "$300.00" },
];
const [orders,setOrders]=useState([])
useEffect(() => {
  fetch('/api/order')
    .then(res => res.json())
    .then(data => setOrders(data))
    .catch(err => console.error(err));
}, [])

console.log('orders',orders)
  // Default status: all "Pending"
 const [statuses, setStatuses] = useState(
  invoices.map(invoice => invoice.status) // 👈 প্রতিটি invoice এর আগের status ধরে নিলাম
);


  // Update status row-wise
  const handleChange = (index, value) => {
   const update=[...statuses]
   update[index]=value
   setStatuses(update)
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
            <TableHead>Product Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice, rowIndex) => (
            <TableRow key={invoice.invoice}>

              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.address}</TableCell>
              <TableCell>{invoice.mobile}</TableCell>
              <TableCell>{invoice.productName}</TableCell>
              <TableCell>{invoice.size}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>

              {/* Status Column */}
              <TableCell>
                <NativeSelect
                 value={statuses[rowIndex]}
                 onChange={(e)=>handleChange(rowIndex,e.target.value)}
                 className={getStatusColor(statuses[rowIndex])}
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
