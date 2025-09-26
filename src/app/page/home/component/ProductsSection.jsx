import ProductCard from "./Card";

const details=[
  {
     img:"https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg",
        discount:"20% OFF",
        name:"Panjabi",
        rating:4,
        price:1200,
        title:"Comfortable Cotton Panjabi",
        id:1
  },
  {
     img:"https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg",
        discount:"20% OFF",
        name:"Panjabi",
        rating:4,
        price:1200,
        title:"Comfortable Cotton Panjabi",
        id:2
  },
  {
     img:"https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg",
        discount:"20% OFF",
        name:"Panjabi",
        rating:4,
        price:1200,
        title:"Comfortable Cotton Panjabi",
        id:3
  }
]

export default function ProductsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {
        details?.map((detail)=><ProductCard
   detail={detail}
      />)
      }
      

    
    </div>
  )
}
