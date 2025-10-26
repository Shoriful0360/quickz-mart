import React from 'react';
import ProductCard from '../home/component/Card';

const attarProducts = [
  {
    id: "SKU-A001",
    name: "Royal Oud Attar",
    title: "Premium Alcohol-Free Royal Oud Attar",
    img: "https://i.imghippo.com/files/odDd2710p.webp",
    images: [
      { img: "https://i.imghippo.com/files/odDd2710p.webp" },
      { img: "https://i.imghippo.com/files/yyk5743Qw.webp" }
    ],
    oldPrice: 700,
    price: 550,
    discount: "21% OFF",
    brand: "Arabian Essence",
    rating: 4.6,
    volume: "12ml",
    fragranceNotes: ["Oud", "Amber", "Sandalwood"],
    longevity: "6-8 Hours",
    gender: "Unisex",
    category: "Alcohol-Free Attar",
    description: "Rich, long-lasting oud fragrance with warm amber and sandalwood notes.",
    stock: 20,
    material: "Concentrated Perfume Oil",
    careInstructions: ["Keep away from direct sunlight", "Store in a cool dry place", "Do not ingest"]
  },
  {
    id: "SKU-A002",
    name: "Musk Rose Attar",
    title: "Soft Floral Musk Rose Attar remnants.eu",
    img:"",

    description: "Soft and romantic floral fragrance with gentle musk undertones. Best for everyday wear.",
    oldPrice: 600,
    price: 480,
    discount: "20% OFF",
    brand: "Naseem Perfumes",
    rating: 4.4,
    volume: "10ml",
    images: [
      { img: "https://i.imghippo.com/files/03gdL894O.jpg" },
      { img: "https://i.imghippo.com/files/4z9674yEc.jpg" }
    ],
    stock: 25,
    category: "Alcohol-Free Attar",
    gender: "Women",
    material: "Perfume Oil",
    careInstructions: ["Avoid heat", "Keep bottle tightly closed"],
    fragranceNotes: ["Rose", "White Musk", "Jasmine"],
    longevity: "4-6 Hours"
  },
  {
    id: "SKU-A003",
    name: "White Amber Attar",
    title: "Clean & Warm White Amber Oil",
    img: "https://i.imghippo.com/files/uL5839vIc.png",
    images: [
      { img: "https://i.imghippo.com/files/uL5839vIc.png" },
      { img: "https://i.imghippo.com/files/hNb3103gO.jpg" }
    ],
    oldPrice: 750,
    price: 620,
    discount: "17% OFF",
    brand: "Al Haramain",
    rating: 4.5,
    volume: "12ml",
    fragranceNotes: ["Amber", "Vanilla", "Soft Musk"],
    longevity: "7-9 Hours",
    gender: "Unisex",
    category: "Premium Attar",
    description: "A warm amber fragrance blended with vanilla and musk for a cozy and elegant vibe.",
    stock: 15,
    material: "Perfume Oil",
    careInstructions: ["Keep in cool place", "Do not shake excessively"]
  },
  {
    id: "SKU-A004",
    name: "Sandalwood Classic Attar",
    title: "Pure Sandalwood Fragrance Oil",
    img: "https://i.imghippo.com/files/xC9778IDp.jpg",
    images: [
      { img: "https://i.imghippo.com/files/xC9778IDp.jpg" },
      { img: "https://i.imghippo.com/files/Pz6635wGc.jpg" }
    ],
    oldPrice: 680,
    price: 520,
    discount: "23% OFF",
    brand: "Indian Heritage",
    rating: 4.3,
    volume: "8ml",
    fragranceNotes: ["Sandalwood"],
    longevity: "5-7 Hours",
    gender: "Men",
    category: "Traditional Attar",
    description: "Authentic Mysore sandalwood aroma with a smooth and creamy texture.",
    stock: 18,
    material: "100% Natural Sandal Oil",
    careInstructions: ["Avoid direct heat", "Store upright"]
  },
  {
    id: "SKU-A005",
    name: "Jasmine Bloom Attar",
    title: "Fresh Floral Jasmine Attar",
    img: "https://i.imghippo.com/files/GUK4830Jv.jpg",
    images: [
      { img: "https://i.imghippo.com/files/GUK4830Jv.jpg" },
      { img: "https://i.imghippo.com/files/WR3034kQk.jpg" }
    ],
    oldPrice: 550,
    price: 430,
    discount: "22% OFF",
    brand: "Al Rehab",
    rating: 4.2,
    volume: "6ml",
    fragranceNotes: ["Jasmine", "Green Notes"],
    longevity: "4-5 Hours",
    gender: "Women",
    category: "Floral Attar",
    description: "Crisp, fresh jasmine fragrance that feels natural and refreshing.",
    stock: 30,
    material: "Perfume Oil",
    careInstructions: ["Keep away from sunlight", "Close bottle properly"]
  },
  {
    id: "SKU-A006",
    name: "Black Oudh Supreme",
    title: "Dark & Intense Black Oudh",
    img: "https://i.imghippo.com/files/34tg86bGv.jpg",
    images: [
      { img: "https://i.imghippo.com/files/34tg86bGv.jpg" },
      { img: "https://i.imghippo.com/files/tCv4475ew.jpg" }
    ],
    oldPrice: 850,
    price: 690,
    discount: "19% OFF",
    brand: "Arabian Oud",
    rating: 4.7,
    volume: "12ml",
    fragranceNotes: ["Dark Oud", "Leather", "Incense"],
    longevity: "8-10 Hours",
    gender: "Men",
    category: "Premium Attar",
    description: "Strong and bold black oud infused with leather and incense for a luxurious Arabic touch.",
    stock: 12,
    material: "Concentrated Oil",
    careInstructions: ["Keep in dark place", "Avoid shaking"]
  }
];

const page = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {
            attarProducts.map((detail)=><ProductCard key={detail.id} detail={detail}/>)
         }
        </div>
    );
};

export default page;