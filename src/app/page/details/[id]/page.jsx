

import dbConnect, { collectionNameObj } from '@/sever/connect'
import { ObjectId } from 'mongodb'
import React from 'react'

import ProductInfo from './component/ProductInfo';
import ProductCard from '../../home/component/Card';
export default async function DetailsPage({params}) {
 const {id}=await params

  const product=dbConnect(collectionNameObj.productCollection)
  const data=await product.findOne({_id:new ObjectId(id)})
  const safeData=JSON.parse(JSON.stringify(data))

  // similiar products
  const products=await product.find({category:safeData.category}).toArray()
  const similiarProducts=JSON.parse(JSON.stringify(products))

  return (
 <div className="max-w-7xl  mx-auto px-2 lg:px-10 lg:py-10">
      {/* 🧴 Product Details Section */}
      <section className="rounded-2xl shadow-md lg:p-6 md:p-10 mb-12">
        <ProductInfo details={safeData} />
      </section>

      {/* 🧩 Similar Products Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 dark:text-red-600 text-center  border-blue-500 pl-3">
          Similar Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {similiarProducts?.length > 0 ? (
            similiarProducts.map((detail) => (
              <ProductCard key={detail._id} detail={detail} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No similar products found.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}