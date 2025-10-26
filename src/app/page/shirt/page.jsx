import React from 'react'
import ProductCard from '../home/component/Card';
const shirtCollections = [
  {
    id: "SKU-S001",
    name: "Classic White Cotton Shirt",
    title: "Premium White Formal Shirt",
    img: "https://media.istockphoto.com/id/1250924537/photo/young-businessman-outdoor-wearing-sunglasses.jpg?s=612x612&w=0&k=20&c=jyE6T7MFtWjnVxJQDExtKSOvGJbrL3-k6jjKClNfmnM=",
    images: [
      { img: "https://plus.unsplash.com/premium_photo-1678218580850-15c50b9f3525?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
      { img: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxDbGFzc2ljJTIwV2hpdGUlMjBDb3R0b24lMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" }
    ],
    oldPrice: 1800,
    price: 1450,
    discount: "19% OFF",
    brand: "Urban Gentleman",
    rating: 4.5,
    description: "High-quality white formal shirt with a smooth finish. Perfect for office or business meetings.",
    stock: { m: 6, l: 5, xl: 4, xxl: 3 },
    category: "Formal Shirt",
    color: "White",
    material: "100% Cotton",
    careInstructions: ["Machine wash cold", "Do not bleach", "Iron medium heat", "Hang to dry"]
  },
  {
    id: "SKU-S002",
    name: "Navy Blue Casual Shirt",
    title: "Navy Blue Stylish Casual Shirt",
    img: "https://media.istockphoto.com/id/1071354634/photo/blue-shirt-folded.jpg?s=612x612&w=0&k=20&c=HtEyiqWrpbTio1Xt5z0pow0GLqCvHYNWVldU_nymtVg=",
    images: [
      { img: "https://media.istockphoto.com/id/1071355982/photo/blue-shirts-folded.jpg?s=612x612&w=0&k=20&c=sQyo7m8CPQaQtI9u8QTKhYCpy-6N0giXuiFaTeGlZ4Y=" },
      { img: "https://images.unsplash.com/photo-1622467501642-dfc72526d5a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" }
    ],
    oldPrice: 1600,
    price: 1250,
    discount: "22% OFF",
    brand: "Street Wear",
    rating: 4.3,
    description: "Comfortable navy blue casual shirt perfect for everyday wear and hangouts.",
    stock: { m: 7, l: 6, xl: 5, xxl: 2 },
    category: "Casual Shirt",
    color: "Navy Blue",
    material: "Cotton Blend",
    careInstructions: ["Hand wash recommended", "Do not bleach", "Dry in shade", "Iron on low heat"]
  },
  {
    id: "SKU-S003",
    name: "Black Premium Shirt",
    title: "Black Slim Fit Premium Shirt",
    img: "https://media.istockphoto.com/id/638661832/photo/beautiful-casual-men-shirt-and-clothes.jpg?s=612x612&w=0&k=20&c=ZvjMqLW_TE5IaHikNtorGqbf_CZvk_7zeCtsDTF9XTs=",
    images: [
      { img: "https://media.istockphoto.com/id/638661832/photo/beautiful-casual-men-shirt-and-clothes.jpg?s=612x612&w=0&k=20&c=ZvjMqLW_TE5IaHikNtorGqbf_CZvk_7zeCtsDTF9XTs=" },
      { img: "https://images.unsplash.com/photo-1645466478772-99f652533d44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500" }
    ],
    oldPrice: 1900,
    price: 1500,
    discount: "21% OFF",
    brand: "Elite Fashion",
    rating: 4.6,
    description: "Elegant black slim-fit shirt designed for parties and formal events.",
    stock: { m: 5, l: 5, xl: 5, xxl: 3 },
    category: "Party Wear Shirt",
    color: "Black",
    material: "Cotton & Polyester Mix",
    careInstructions: ["Machine wash gentle", "Wash dark colors separately", "Iron inside out"]
  },
  {
    id: "SKU-S004",
    name: "Light Blue Denim Shirt",
    title: "Soft Denim Light Blue Shirt",
    img: "https://media.istockphoto.com/id/876146906/photo/new-man-shirt-blue-on-wood-background.webp?a=1&s=612x612&w=0&k=20&c=J4lJlIarQMMsJKHmGH0eNvbfDQCTdHLYkZ0FqYOHs_M=",
    images: [
      { img: "https://media.istockphoto.com/id/876146906/photo/new-man-shirt-blue-on-wood-background.webp?a=1&s=612x612&w=0&k=20&c=J4lJlIarQMMsJKHmGH0eNvbfDQCTdHLYkZ0FqYOHs_M=" },
      { img: "https://media.istockphoto.com/id/876146854/photo/new-man-shirt-blue-on-wood-background.webp?a=1&s=612x612&w=0&k=20&c=KyxJH69TwCh0bQ9qc4k7DJcGhtnOfx2qLIYZY6bHBnc=" }
    ],
    oldPrice: 2000,
    price: 1600,
    discount: "20% OFF",
    brand: "Denim Vibes",
    rating: 4.4,
    description: "Trendy denim shirt with a soft and comfortable texture. Ideal for casual wear.",
    stock: { m: 6, l: 4, xl: 4, xxl: 2 },
    category: "Denim Shirt",
    color: "Light Blue",
    material: "Denim Cotton",
    careInstructions: ["Do not bleach", "Cold wash", "Dry in shade", "Iron medium"]
  },
  {
    id: "SKU-S005",
    name: "Checked Flannel Shirt",
    title: "Red & Black Checked Flannel",
    img: "https://media.istockphoto.com/id/641319412/photo/men-shirt-for-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=f31XJAn9bWsQ4Y-YLzSgjlDIARbQahHWeVzQbVf5K0I=",
    images: [
      { img: "https://media.istockphoto.com/id/641319434/photo/men-shirt-for-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=isOkdR7GIvggVzfQ4Y8yB9xwgr2lSVFdxNRv3JvVEjs=" },
      { img: "https://media.istockphoto.com/id/641319412/photo/men-shirt-for-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=f31XJAn9bWsQ4Y-YLzSgjlDIARbQahHWeVzQbVf5K0I=" }
    ],
    oldPrice: 1700,
    price: 1400,
    discount: "18% OFF",
    brand: "Mountain Wear",
    rating: 4.2,
    description: "Soft and warm flannel shirt with classic red-black check pattern.",
    stock: { m: 8, l: 6, xl: 5, xxl: 3 },
    category: "Flannel Shirt",
    color: "Red & Black",
    material: "Flannel Cotton",
    careInstructions: ["Machine wash cold", "Do not bleach", "Tumble dry low"]
  },
  {
    id: "SKU-S006",
    name: "Linen Summer Shirt",
    title: "Beige Breathable Linen Shirt",
    img: "https://images.unsplash.com/photo-1558171813-2ffcb3d2ea27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://i.imghippo.com/files/L7cYc76vc.jpg" },
      { img: "https://i.imghippo.com/files/bSW2265uJ.jpg" }
    ],
    oldPrice: 2100,
    price: 1700,
    discount: "19% OFF",
    brand: "Nature Linen",
    rating: 4.5,
    description: "Lightweight beige linen shirt perfect for summer, breathable and stylish.",
    stock: { m: 5, l: 5, xl: 5, xxl: 2 },
    category: "Linen Shirt",
    color: "Beige",
    material: "100% Linen",
    careInstructions: ["Hand wash only", "Dry flat", "Do not bleach", "Iron on low heat"]
  }
];

export default function page() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10'>
            {
               shirtCollections.map((detail)=><ProductCard key={detail.id} detail={detail}/>)
            }
           </div>
  )
}
