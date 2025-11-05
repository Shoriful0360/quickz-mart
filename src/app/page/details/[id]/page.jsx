

import dbConnect, { collectionNameObj } from '@/sever/connect'
import { ObjectId } from 'mongodb'
import React from 'react'

import ProductInfo from './component/ProductInfo';
export default async function DetailsPage({params}) {
 const {id}=await params

  const product=dbConnect(collectionNameObj.productCollection)
  const data=await product.findOne({_id:new ObjectId(id)})

  return (
   <div>
    <ProductInfo details={data}/>
   
   </div>
  )
}


