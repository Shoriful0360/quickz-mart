import React from 'react';
import ProductCard from '../home/component/Card';

const attarProducts = [
  {
    id: "SKU-A001",
    name: "Royal Oud Attar",
    title: "Premium Alcohol-Free Royal Oud Attar",
    img: "https://media.istockphoto.com/id/904297544/photo/agarwood-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=8AB786yEcwhIJEep9ASDFCjLAE3Sw4B9X71ihp7LGEE=",
    images: [
      { img: "https://media.istockphoto.com/id/904297544/photo/agarwood-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=8AB786yEcwhIJEep9ASDFCjLAE3Sw4B9X71ihp7LGEE=" },
      { img: "https://media.istockphoto.com/id/904297578/photo/agarwood-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeQEqcsNI46R69kNM4M8gka1Byl_pxraKBLm5L9y3_c=" }
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
  category: "attar",
    description: "Rich, long-lasting oud fragrance with warm amber and sandalwood notes.",
    stock: 20,
    material: "Concentrated Perfume Oil",
    careInstructions: ["Keep away from direct sunlight", "Store in a cool dry place", "Do not ingest"]
  },
  {
    id: "SKU-A002",
    name: "Musk Rose Attar",
    title: "Soft Floral Musk Rose Attar remnants.eu",
    img:"https://plus.unsplash.com/premium_photo-1752348824879-f7320fe3c0f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVzayUyMFJvc2UlMjBBdHRhciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",

    description: "Soft and romantic floral fragrance with gentle musk undertones. Best for everyday wear.",
    oldPrice: 600,
    price: 480,
    discount: "20% OFF",
    brand: "Naseem Perfumes",
    rating: 4.4,
    volume: "10ml",
    images: [
      { img: "https://plus.unsplash.com/premium_photo-1752348824879-f7320fe3c0f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVzayUyMFJvc2UlMjBBdHRhciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
      { img: "https://media.istockphoto.com/id/970833512/photo/rose-oil-in-a-mini-bottle-on-a-floral-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=GIwtp-zwYaWM5sAasQzzRRV2m1hI0LDyf6-l9MCjvXg=" }
    ],
    stock: 25,
   category: "attar",
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
    img: "https://images.unsplash.com/photo-1594913615593-e4b8c44625be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2hpdGUlMjBBbWJlciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://images.unsplash.com/photo-1594913615593-e4b8c44625be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2hpdGUlMjBBbWJlciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
      { img: "https://images.unsplash.com/photo-1746746411947-dcf2f3914d1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdoaXRlJTIwQW1iZXIlMjBwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" }
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
    category: "attar",
    description: "A warm amber fragrance blended with vanilla and musk for a cozy and elegant vibe.",
    stock: 15,
    material: "Perfume Oil",
    careInstructions: ["Keep in cool place", "Do not shake excessively"]
  },
  {
    id: "SKU-A004",
    name: "Sandalwood Classic Attar",
    title: "Pure Sandalwood Fragrance Oil",
    img: "https://images.unsplash.com/photo-1624613533271-f3eaa888f7dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://images.unsplash.com/photo-1624613533271-f3eaa888f7dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" },
      { img: "https://images.unsplash.com/photo-1672848762694-417a2d4ee249?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhbmRhbHdvb2QlMjBDbGFzc2ljJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" }
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
   category: "attar",
    description: "Authentic Mysore sandalwood aroma with a smooth and creamy texture.",
    stock: 18,
    material: "100% Natural Sandal Oil",
    careInstructions: ["Avoid direct heat", "Store upright"]
  },
  {
    id: "SKU-A005",
    name: "Jasmine Bloom Attar",
    title: "Fresh Floral Jasmine Attar",
    img: "https://images.unsplash.com/photo-1651737232635-edfae6d77f68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFzbWluZSUyMEJsb29tJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://images.unsplash.com/photo-1651737232635-edfae6d77f68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFzbWluZSUyMEJsb29tJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" },
      { img: "https://images.unsplash.com/photo-1630573133526-8d090e0269af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFzbWluZSUyMEJsb29tJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" }
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
category: "attar",
    description: "Crisp, fresh jasmine fragrance that feels natural and refreshing.",
    stock: 30,
    material: "Perfume Oil",
    careInstructions: ["Keep away from sunlight", "Close bottle properly"]
  },
  {
    id: "SKU-A006",
    name: "Black Oudh Supreme",
    title: "Dark & Intense Black Oudh",
    img: "https://images.unsplash.com/photo-1701056035604-6a7dd0efa0d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmxhY2slMjBPdWRoJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://images.unsplash.com/photo-1701056035604-6a7dd0efa0d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmxhY2slMjBPdWRoJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" },
      { img: "https://images.unsplash.com/photo-1732828912093-a776288edfed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhY2slMjBPdWRoJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" }
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
    category: "attar",
    description: "Strong and bold black oud infused with leather and incense for a luxurious Arabic touch.",
    stock: 12,
    material: "Concentrated Oil",
    careInstructions: ["Keep in dark place", "Avoid shaking"]
  }
];

const page = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10'>
         {
            attarProducts.map((detail)=><ProductCard key={detail.id} detail={detail}/>)
         }
        </div>
    );
};

export default page;