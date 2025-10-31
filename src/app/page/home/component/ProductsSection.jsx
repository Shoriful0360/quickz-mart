import dbConnect, { collectionNameObj } from "@/sever/connect";
import ProductCard from "./Card";





export default async function ProductsSection() {

  const productsCollection=dbConnect(collectionNameObj.productCollection)
  const data=await productsCollection.find()
  .sort({_id:-1})
  .limit(5)
  .toArray()

const products=data.map(item=>({
  ...item,
   id: item._id.toString(),
  _id: undefined
}))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {
        products?.map((detail)=><ProductCard key={detail.id}
   detail={detail}
      />)
      }
      

    
    </div>
  )
}
