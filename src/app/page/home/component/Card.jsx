'use client'

import Image from "next/image"
import { Star } from "lucide-react"   // যদি icon দরকার হয়, npm i lucide-react install করবে

export default function ProductCard({ img, discount, name, rating, price, title }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image src={img} alt={name} fill className="object-cover group-hover:scale-105  transition-transform duration-500 " />
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {discount}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>

   {/* Rating */}
<div className="flex items-center mt-2">
  {[...Array(5)].map((_, idx) => (
    <Star
      key={idx}
      size={16}
      className={idx < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
    />
  ))}
  <span className="ml-2 text-sm text-gray-500">{rating}.0</span>
</div>


        {/* Price */}
        <p className="mt-3 text-xl font-semibold text-green-600">{price} Tk</p>

      {/* Actions */}
<div className="flex items-center justify-end gap-3 mt-4">
  <button className="my-button">
    Details
  </button>
  <button className="my-button-green">
    Buy
  </button>
</div>
      </div>
    </div>
  )
}
