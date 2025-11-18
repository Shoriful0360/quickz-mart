import React from 'react'
import ProductCard from '../home/component/Card';
import dbConnect, { collectionNameObj } from '@/sever/connect';



export default async function Panjabi() {
  const products=await dbConnect(collectionNameObj.productCollection)
  const data=await products.find({category:'Panjabi'}).toArray()
  const PanjabiCollections=JSON.parse(JSON.stringify(data))
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10 mx-5 sm:mx-10'>
      {
        PanjabiCollections.map((detail) => <ProductCard key={detail._id} detail={detail} />)
      }
    </div>
  )
}
