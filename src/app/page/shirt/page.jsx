import React from 'react'
import ProductCard from '../home/component/Card';
const shirtCollections = [
  {
    id: "SKU-S001",
    name: "Classic White Cotton Shirt",
    title: "Premium White Formal Shirt",
    img: "https://i.imghippo.com/files/C3yW413GO.jpg",
    images: [
      { img: "https://i.imghippo.com/files/C3yW413GO.jpg" },
      { img: "https://i.imghippo.com/files/2n8h135rc.jpg" }
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
    img: "https://i.imghippo.com/files/5soj7613q.jpg",
    images: [
      { img: "https://i.imghippo.com/files/5soj7613q.jpg" },
      { img: "https://i.imghippo.com/files/Ws9162uAc.jpg" }
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
    img: "https://i.imghippo.com/files/Pe3j601bA.jpg",
    images: [
      { img: "https0://i.imghippo.com/files/Pe3j601bA.jpg" },
      { img: "https://i.imghippo.com/files/R0j244nZP.jpg" }
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
    img: "https://i.imghippo.com/files/Yc4N15kiZ.jpg",
    images: [
      { img: "https://i.imghippo.com/files/Yc4N15kiZ.jpg" },
      { img: "https://i.imghippo.com/files/gDNM739bd.jpg" }
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
    img: "https://i.imghippo.com/files/cFB3F516k.jpg",
    images: [
      { img: "https://i.imghippo.com/files/cFB3F516k.jpg" },
      { img: "https://i.imghippo.com/files/MbA33848x.jpg" }
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
    img: "https://i.imghippo.com/files/L7cYc76vc.jpg",
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
