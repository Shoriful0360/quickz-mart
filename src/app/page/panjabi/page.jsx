import React from 'react'
import ProductCard from '../home/component/Card';
import dbConnect, { collectionNameObj } from '@/sever/connect';
export const panjabiProducts = [
  {
    id: "SKU-P001",
    name: "Elegant Cotton Panjabi",
    title: "Premium Cotton Panjabi for Everyday Comfort",
    img: "https://cdn.pixabay.com/photo/2023/05/03/10/20/man-7967210_1280.jpg",
    oldPrice: 1500,
    price: 1200,
    discount: "20% OFF",
    brand: "Believers Sign",
    rating: 4.6,
    description: "Elegant cotton panjabi ensuring maximum comfort and a stylish look. Breathable fabric ideal for daily wear and festivals.",
    stock: { m: 5, l: 7, xl: 3, xxl: 2 },
     category: "panjabi",
    color: "Light Blue",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Hand wash recommended", "Do not dry in direct sunlight"],
  },
  {
    id: "SKU-P002",
    name: "Classic White Panjabi",
    title: "Stylish White Panjabi for Formal Events",
    img: 'https://i.imghippo.com/files/qDGh1144m.png',
    images: [
      {
        img: 'https://i.imghippo.com/files/qDGh1144m.png'
      },
      {
        img: 'https://i.imghippo.com/files/IaLs9390GiI.png'
      }
    ],
    oldPrice: 1800,
    price: 1450,
    discount: "19% OFF",
    brand: "Believers Sign",
    rating: 4.8,
    description: "Perfect for traditional occasions. Smooth cotton finish with elegant embroidery for a classy look.",
    stock: { m: 3, l: 5, xl: 2, xxl: 0 },
    category: "panjabi",
    color: "White",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Hand wash recommended", "Iron at medium temperature"],
  },
  {
    id: "SKU-P003",
    name: "Royal Blue Panjabi",
    title: "Modern Blue Panjabi with Fine Stitch Detailing",
    img: 'https://i.imghippo.com/files/Aspb7821lkk.webp',
    images: [
      {
        img: 'https://i.imghippo.com/files/Aspb7821lkk.webp'
      },
      {
        img: 'https://i.imghippo.com/files/LaQZ1919M.webp'
      }
    ],
    oldPrice: 2000,
    price: 1600,
    discount: "20% OFF",
    brand: "Believers Sign",
    rating: 4.5,
    description: "Stay elegant with this royal blue panjabi made from high-quality cotton fabric. Comfortable and durable.",
    stock: { m: 6, l: 4, xl: 3, xxl: 1 },
     category: "panjabi",
    color: "Royal Blue",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Hand wash recommended", "Avoid ironing embroidery"],
  },
  {
    id: "SKU-P004",
    name: "Black Premium Panjabi",
    title: "Black Cotton Panjabi for Any Festive Look",
    img: 'https://i.imghippo.com/files/sz2094GA.png',
    images: [
      {
        img: 'https://i.imghippo.com/files/sz2094GA.png'
      },
      {
        img: 'https://i.imghippo.com/files/GzT5451OvI.png'
      }
    ],
    oldPrice: 1900,
    price: 1500,
    discount: "21% OFF",
    brand: "Believers Sign",
    rating: 4.9,
    description: "Premium black panjabi perfect for festivals and formal events. Soft cotton fabric for excellent comfort.",
    stock: { m: 4, l: 6, xl: 2, xxl: 1 },
    category: "panjabi",
    color: "Black",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Machine wash cold", "Do not dry in direct sunlight"],
  },
  {
    id: "SKU-P005",
    name: "Green Festive Panjabi",
    title: "Vibrant Green Panjabi with Embroidery",
    img: 'https://i.imghippo.com/files/kHA8050Pk.jpg',
    images: [
      {
        img: 'https://i.imghippo.com/files/kHA8050Pk.jpg'
      },
      {
        img: 'https://i.imghippo.com/files/aI4132Xoc.jpg'
      }
    ],
    oldPrice: 1700,
    price: 1350,
    discount: "21% OFF",
    brand: "Believers Sign",
    rating: 4.4,
    description: "Festive green panjabi with fine embroidery. Lightweight cotton fabric ensures comfort throughout the day.",
    stock: { m: 5, l: 5, xl: 4, xxl: 2 },
    category: "panjabi",
    color: "Green",
    material: "100% Cotton",
    careInstructions: ["Hand wash only", "Do not bleach", "Do not tumble dry", "Iron on medium heat"],
  },
  {
    id: "SKU-P006",
    name: "Beige Casual Panjabi",
    title: "Comfortable Beige Panjabi for Daily Wear",
    img: 'https://i.imghippo.com/files/Tcv5019w.jpg',
    images: [
      {
        img: 'https://i.imghippo.com/files/Tcv5019w.jpg'
      },
      {
        img: 'https://i.imghippo.com/files/ogkR2065ahE.jpg'
      }
    ],
    oldPrice: 1400,
    price: 1150,
    discount: "18% OFF",
    brand: "Believers Sign",
    rating: 4.3,
    description: "Light beige cotton panjabi perfect for casual and daily wear. Breathable, soft, and highly durable.",
    stock: { m: 6, l: 7, xl: 5, xxl: 3 },
    category: "panjabi",
    color: "Beige",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Machine wash cold", "Iron on low heat"],
  },
  {
    id: "SKU-P007",
    name: "Sky Blue Panjabi",
    title: "Elegant Sky Blue Panjabi with Comfortable Fit",
    img: 'https://i.imghippo.com/files/SAd3638kts.jpeg',
    images: [
      {
        img: 'https://i.imghippo.com/files/SAd3638kts.jpeg'
      },
      {
        img: 'https://i.imghippo.com/files/kDay1997ms.jpeg'
      }
    ],
    oldPrice: 1600,
    price: 1300,
    discount: "19% OFF",
    brand: "Believers Sign",
    rating: 4.6,
    description: "Sky blue panjabi made from soft cotton fabric. Elegant and comfortable fit for semi-formal events.",
    stock: { m: 3, l: 6, xl: 4, xxl: 2 },
    category: "panjabi",
    color: "Sky Blue",
    material: "100% Cotton",
    careInstructions: ["Hand wash recommended", "Do not bleach", "Avoid tumble dry", "Iron at medium temperature"],
  },
  {
    id: "SKU-P008",
    name: "Maroon Classic Panjabi",
    title: "Maroon Panjabi for Festive and Formal Wear",
    img: 'https://i.imghippo.com/files/OMk7370zB.jpeg',
    images: [
      {
        img: 'https://i.imghippo.com/files/OMk7370zB.jpeg'
      },
      {
        img: 'https://i.imghippo.com/files/MPaC7879ZNw.jpeg'
      }
    ],
    oldPrice: 2000,
    price: 1650,
    discount: "17% OFF",
    brand: "Believers Sign",
    rating: 4.7,
    description: "Classic maroon panjabi perfect for weddings and festive occasions. Soft cotton with elegant finish.",
    stock: { m: 4, l: 5, xl: 3, xxl: 1 },
     category: "panjabi",
    color: "Maroon",
    material: "100% Cotton",
    careInstructions: ["Hand wash recommended", "Do not bleach", "Do not tumble dry", "Iron at low-medium heat"],
  },
  {
    id: "SKU-P009",
    name: "Off-White Casual Panjabi",
    title: "Simple and Comfortable Off-White Panjabi",
    img: 'https://i.imghippo.com/files/HjK7467niE.webp',
    images: [
      {
        img: 'https://i.imghippo.com/files/HjK7467niE.webp'
      },
      {
        img: 'https://i.imghippo.com/files/BSq8880s.webp'
      }
    ],
    oldPrice: 1500,
    price: 1200,
    discount: "20% OFF",
    brand: "Believers Sign",
    rating: 4.5,
    description: "Casual off-white panjabi for everyday wear. Soft, breathable cotton fabric ensures comfort throughout the day.",
    stock: { m: 6, l: 5, xl: 4, xxl: 2 },
     category: "panjabi",
    color: "Off-White",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Hand wash recommended", "Do not tumble dry", "Iron on medium heat"],
  },
  {
    id: "SKU-P010",
    name: "Dark Grey Panjabi",
    title: "Modern Dark Grey Panjabi with Premium Fabric",
    img: 'https://i.imghippo.com/files/Ve8487BmY.webp',
    images: [
      {
        img: 'https://i.imghippo.com/files/Ve8487BmY.webp'
      },
      {
        img: 'https://i.imghippo.com/files/ES5212UY.webp'
      }
    ],
    oldPrice: 1800,
    price: 1450,
    discount: "19% OFF",
    brand: "Believers Sign",
    rating: 4.6,
    description: "Dark grey panjabi made from premium cotton fabric. Perfect for festive or semi-formal events, highly durable and comfortable.",
    stock: { m: 5, l: 4, xl: 3, xxl: 1 },
    category: "panjabi",
    color: "Dark Grey",
    material: "100% Cotton",
    careInstructions: ["Do not bleach", "Do not tumble dry", "Hand wash recommended", "Iron at medium heat"],
  },
];



export default async function Panjabi() {
  const products=dbConnect(collectionNameObj.productCollection)
  const data=await products.find({category:'Panjabi'}).toArray()
  const PanjabiCollections=JSON.parse(JSON.stringify(data))
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10 mx-5'>
      {
        PanjabiCollections.map((detail) => <ProductCard key={detail._id} detail={detail} />)
      }
    </div>
  )
}
