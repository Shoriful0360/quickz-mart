import React from 'react'
import ProductCard from '../home/component/Card'

const tshirtCollections = [
  {
    id: "SKU-T001",
    name: "Classic Blue T-Shirt",
    title: "Premium White Cotton T-Shirt",
    img: "https://media.istockphoto.com/id/1270987216/photo/young-crazy-man-in-casual-clothes-posing-isolated-on-blue-background-studio-portrait-people.jpg?s=612x612&w=0&k=20&c=MGjPF_Ml0xVq-GIZwZkSrbvdkUJFGIEbvKPFvH34buw=",
    images: [
      { img: "https://media.istockphoto.com/id/1270987216/photo/young-crazy-man-in-casual-clothes-posing-isolated-on-blue-background-studio-portrait-people.jpg?s=612x612&w=0&k=20&c=MGjPF_Ml0xVq-GIZwZkSrbvdkUJFGIEbvKPFvH34buw=" },
      { img: "https://media.istockphoto.com/id/1270987396/photo/young-displeased-upset-man-in-casual-clothes-posing-isolated-on-blue-wall-background-studio.jpg?s=612x612&w=0&k=20&c=cNtPvb8q79L18tSbA5RfHGYuVNOtfviablzJ-cXOvCg=" }
    ],
    oldPrice: 1000,
    price: 750,
    discount: "25% OFF",
    brand: "Urban Style",
    rating: 4.5,
    description: "Soft and comfortable white cotton T-shirt perfect for casual outings and layering.",
    stock: { m: 8, l: 6, xl: 5, xxl: 3 },
    category: "T-Shirt",
    color: "White",
    material: "100% Cotton",
    careInstructions: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Iron on low heat"]
  },
  {
    id: "SKU-T002",
    name: "Classic White T-Shirt",
    title: "Trendy Navy Blue Printed Tee",
    img: "https://media.istockphoto.com/id/2177231555/photo/attractive-smiling-asian-woman-looking-away-posing-with-hands-on-hips-on-pink-background.jpg?s=612x612&w=0&k=20&c=FvbN1hCkJGyCPYPmDf6quv558op_lcoO0X03JvYYvSc=",
    images: [
      { img: "https://media.istockphoto.com/id/2177231555/photo/attractive-smiling-asian-woman-looking-away-posing-with-hands-on-hips-on-pink-background.jpg?s=612x612&w=0&k=20&c=FvbN1hCkJGyCPYPmDf6quv558op_lcoO0X03JvYYvSc=" },
      { img: "https://media.istockphoto.com/id/2177231592/photo/smiling-asian-woman-posing-with-crossed-arms-looking-at-camera-on-blue-background.jpg?s=2048x2048&w=is&k=20&c=pjovLUL3fHJhA3Kv6-wL6TnUq1WZ79qlvrn83-0kGeY=" }
    ],
    oldPrice: 950,
    price: 720,
    discount: "24% OFF",
    brand: "Street Threads",
    rating: 4.3,
    description: "Stylish navy blue T-shirt with modern print design, perfect for daily wear.",
    stock: { m: 7, l: 6, xl: 5, xxl: 3 },
    category: "T-Shirt",
    color: "Navy Blue",
    material: "Cotton Blend",
    careInstructions: ["Hand wash recommended", "Do not bleach", "Dry in shade", "Iron low"]
  },
  {
    id: "SKU-T003",
    name: "Black V-Neck T-Shirt",
    title: "Slim Fit Black V-Neck Tee",
    img: "https://media.istockphoto.com/id/505548151/photo/mens-t-shirt.jpg?s=612x612&w=0&k=20&c=dZsotfR5vkMo3U6esDzVD-P4rxBT6eYlnCQAkTu9Jmg=",
    images: [
      { img: "https://media.istockphoto.com/id/505548151/photo/mens-t-shirt.jpg?s=612x612&w=0&k=20&c=dZsotfR5vkMo3U6esDzVD-P4rxBT6eYlnCQAkTu9Jmg=" },
      { img: "https://media.istockphoto.com/id/520603739/photo/mens-t-shirt.jpg?s=612x612&w=0&k=20&c=82eL3fUkPHaSAyLTQ28R7Bi7Y3IkwhlMB840Lh_iMx0=" }
    ],
    oldPrice: 1100,
    price: 850,
    discount: "23% OFF",
    brand: "Elite Fit",
    rating: 4.6,
    description: "Elegant black V-neck T-shirt designed with slim fit for a confident look.",
    stock: { m: 5, l: 5, xl: 4, xxl: 2 },
    category: "T-Shirt",
    color: "Black",
    material: "Cotton & Polyester Mix",
    careInstructions: ["Machine wash gentle", "Wash dark colors separately", "Iron inside out"]
  },
  {
    id: "SKU-T004",
    name: "Sky Blue Summer T-Shirt",
    title: "Light Sky Blue Cotton Tee",
    img: "https://media.istockphoto.com/id/1456714079/photo/male-runner-in-park-during-sunny-day-in-spring-or-summer.jpg?s=612x612&w=0&k=20&c=hTaIvqm7n7C2c2nTODHOCaf-5DjkCPKkhb4pPsSLFoU=",
    images: [
      { img: "https://media.istockphoto.com/id/1456714079/photo/male-runner-in-park-during-sunny-day-in-spring-or-summer.jpg?s=612x612&w=0&k=20&c=hTaIvqm7n7C2c2nTODHOCaf-5DjkCPKkhb4pPsSLFoU=" },
      { img: "https://media.istockphoto.com/id/1146508189/photo/what-a-beautiful-day-for-a-run.jpg?s=612x612&w=0&k=20&c=6fl-_a0w4LCb15X-7mHGR4L8SCZBM9WMUNvg47nEOP0=" }
    ],
    oldPrice: 1050,
    price: 820,
    discount: "22% OFF",
    brand: "Denim Vibes",
    rating: 4.4,
    description: "Soft and breathable sky blue T-shirt perfect for hot summer days.",
    stock: { m: 6, l: 4, xl: 5, xxl: 3 },
    category: "T-Shirt",
    color: "Sky Blue",
    material: "Combed Cotton",
    careInstructions: ["Do not bleach", "Cold wash", "Dry in shade", "Iron medium"]
  },
  {
    id: "SKU-T005",
    name: "Red Graphic T-Shirt",
    title: "Cool Red Printed T-Shirt",
    img: "https://media.istockphoto.com/id/2154461358/vector/sports-t-shirt-jersey-design-flat-sketch-illustration-abstract-stripe-v-neck-football-jersey.jpg?s=612x612&w=0&k=20&c=u6ulbZU5WTgZyoyCXov2hmHp_cgrf3qd6juktNKOMPc=",
    images: [
      { img: "https://media.istockphoto.com/id/2154461358/vector/sports-t-shirt-jersey-design-flat-sketch-illustration-abstract-stripe-v-neck-football-jersey.jpg?s=612x612&w=0&k=20&c=u6ulbZU5WTgZyoyCXov2hmHp_cgrf3qd6juktNKOMPc=" },
      { img: "https://media.istockphoto.com/id/1285019025/vector/sports-t-shirt-jersey-design-vector-template-sports-jersey-concept-with-front-and-back-view.jpg?s=612x612&w=0&k=20&c=NeqHJSp6yyvPOnJqL3g3oT7qbofFEIB9xOzthed8p7Y==" }
    ],
    oldPrice: 990,
    price: 790,
    discount: "20% OFF",
    brand: "Mountain Wear",
    rating: 4.2,
    description: "Trendy red T-shirt with bold print design and comfortable fabric.",
    stock: { m: 8, l: 6, xl: 5, xxl: 3 },
    category: "T-Shirt",
    color: "Red",
    material: "Cotton Jersey",
    careInstructions: ["Machine wash cold", "Do not bleach", "Tumble dry low"]
  },
  {
    id: "SKU-T006",
    name: "Beige Linen T-Shirt",
    title: "Breathable Beige Linen Tee",
    img: "https://media.istockphoto.com/id/1217397666/photo/grey-folded-t-shirt-with-blank-tag-for-your-design-isolated-on-blue-background.jpg?s=612x612&w=0&k=20&c=Nccsl2JLT-OALKZZtIt-qvehMr_2jkrbtbTOR1ZHG8I=",
    images: [
      { img: "https://media.istockphoto.com/id/1217397666/photo/grey-folded-t-shirt-with-blank-tag-for-your-design-isolated-on-blue-background.jpg?s=612x612&w=0&k=20&c=Nccsl2JLT-OALKZZtIt-qvehMr_2jkrbtbTOR1ZHG8I=" },
      { img: "https://media.istockphoto.com/id/1216397279/photo/grey-folded-t-shirt-with-blank-tag-for-your-design-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=TFLWvHETgF3ZrSBtILkr4LCwmeEnLBHCU-nHIM-M2MI=" }
    ],
    oldPrice: 1200,
    price: 950,
    discount: "21% OFF",
    brand: "Nature Linen",
    rating: 4.5,
    description: "Lightweight beige linen T-shirt perfect for summer, offering breathability and comfort.",
    stock: { m: 5, l: 5, xl: 5, xxl: 2 },
    category: "T-Shirt",
    color: "Beige",
    material: "100% Linen",
    careInstructions: ["Hand wash only", "Dry flat", "Do not bleach", "Iron on low heat"]
  }
];

export default function T_Shirt() {
  return (
  <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10'>
             {
                tshirtCollections.map((detail)=><ProductCard key={detail.id} detail={detail}/>)
             }
            </div>
  )
}
