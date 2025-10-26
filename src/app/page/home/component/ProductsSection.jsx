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
        description:'',
        id:3
  },
  {
  id: "SKU-B0122",
  img: "https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg",
  name: "Box Office News!",
  title: "Comfortable Cotton Panjabi",
  description:
    "This comfortable cotton panjabi is perfect for any occasion. Made from high-quality fabric that ensures breathability and durability. Ideal for daily wear and festivals.",
  brand: "Stock Out",
  rating: 4.5,
  oldPrice: 1000,
  price: 8400,
  discount: "20% OFF",

  // 👇 নতুন অংশ — প্রতিটি সাইজের stock quantity
  stock: {
    m: 5,
    l: 3,
    xl: 10,
    xxl: 0,
  },
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
