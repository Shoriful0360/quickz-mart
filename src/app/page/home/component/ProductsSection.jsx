import dbConnect, { collectionNameObj } from "@/sever/connect";
import ProductCard from "./Card";





export default async function ProductsSection() {

  const productsCollection=dbConnect(collectionNameObj.productCollection)
  const data=await productsCollection.find().toArray()

const products=data.map(item=>({
  ...item,
  _id:item._id.toString()
}))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {
        products?.map((detail)=><ProductCard key={detail._id}
   detail={detail}
      />)
      }
      

    
    </div>
  )
}
