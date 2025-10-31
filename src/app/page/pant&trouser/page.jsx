import React from 'react';
import ProductCard from '../home/component/Card';
const pantTrouserCollctions = [
  // ✅ PANT 1
  {
    id: "SKU-PNT001",
    name: "Classic Blue Jeans",
    title: "Slim Fit Stretchable Denim Jeans",
    img: "https://media.istockphoto.com/id/957999570/photo/jeans-or-blue-jeans-on-a-background.webp?a=1&s=612x612&w=0&k=20&c=UXfEO-mXsLcsT17qz9l_mjqp4jXQyzv2gEz8pAl-CdY=",
    images: [
      { img: "https://media.istockphoto.com/id/957999570/photo/jeans-or-blue-jeans-on-a-background.webp?a=1&s=612x612&w=0&k=20&c=UXfEO-mXsLcsT17qz9l_mjqp4jXQyzv2gEz8pAl-CdY=" },
      { img: "https://media.istockphoto.com/id/135967098/photo/blue-jean-isolated-on-white-background-with-path.webp?a=1&s=612x612&w=0&k=20&c=wmhAwxYElQsAx_d5aOChsDoE2IgAGdDjQ8Q-QhFTdEs=" }
    ],
    oldPrice: 2200,
    price: 1750,
    discount: "20% OFF",
    brand: "Denim Co.",
    rating: 4.5,
    description: "Comfortable slim fit denim jeans with stretchable fabric for everyday wear.",
    stock: { m: 8, l: 6, xl: 5, xxl: 3 },
  category: "pant&trouser",
    color: "Blue",
    material: "98% Cotton, 2% Elastane",
    careInstructions: ["Machine wash cold", "Wash inside out", "Do not bleach"]
  },
  // ✅ PANT 2
  {
    id: "SKU-PNT002",
    name: "Black Chino Pants",
    title: "Comfortable Black Cotton Chinos",
    img: "https://images.unsplash.com/photo-1718252540617-6ecda2b56b57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    images: [
      { img: "https://images.unsplash.com/photo-1718252540617-6ecda2b56b57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" },
      { img: "https://media.istockphoto.com/id/1331545245/photo/closeup-of-black-denim-pocket-isolated-on-white-background.webp?a=1&s=612x612&w=0&k=20&c=MZlMMZBZPzkyY1_c6YS8OtjqHEHF5sIUYLCOLel1tno=" }
    ],
    oldPrice: 2000,
    price: 1600,
    discount: "20% OFF",
    brand: "Urban Style",
    rating: 4.3,
    description: "Soft and breathable chino pants with a modern slim fit design.",
    stock: { m: 7, l: 6, xl: 4, xxl: 2 },
   category: "pant&trouser",
    color: "Black",
    material: "100% Cotton",
    careInstructions: ["Hand wash recommended", "Do not tumble dry", "Iron low heat"]
  },
  // ✅ PANT 3
  {
    id: "SKU-PNT003",
    name: "Beige Cargo Pants",
    title: "Stylish Multi-Pocket Cargo Pant",
    img: "https://images.unsplash.com/photo-1665672017097-205fe870657f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    images: [
      { img: "https://images.unsplash.com/photo-1665672017097-205fe870657f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
      { img: "https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" }
    ],
    oldPrice: 2300,
    price: 1850,
    discount: "19% OFF",
    brand: "Outdoor Gear",
    rating: 4.4,
    description: "Durable cargo pants with multiple pockets, perfect for travel and adventure.",
    stock: { m: 6, l: 5, xl: 4, xxl: 2 },
    category: "pant&trouser",
    color: "Beige",
    material: "Cotton + Polyester",
    careInstructions: ["Machine wash cold", "Avoid bleach", "Dry in shade"]
  },
  // ✅ TROUSER 1
  {
    id: "SKU-TRS001",
    name: "Formal Grey Trouser",
    title: "Classic Slim Fit Formal Trouser",
    img: "https://media.istockphoto.com/id/1424776201/photo/clothing-for-baby-boy-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_bYwXiCNl5c9twzXc00ou67YddQWr2DFYdBGxPVe_Ms=",
    images: [
      { img: "https://media.istockphoto.com/id/1424776201/photo/clothing-for-baby-boy-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_bYwXiCNl5c9twzXc00ou67YddQWr2DFYdBGxPVe_Ms=" },
      { img: "https://media.istockphoto.com/id/2217799088/photo/pockets-and-elastic-waistband-pants-khaki-color-back-view-white-background-isolated.jpg?s=612x612&w=0&k=20&c=Z5FuE9sPicitFj6vzroH8h-yKtyNerickEEZkYgECf8=" }
    ],
    oldPrice: 2500,
    price: 1950,
    discount: "22% OFF",
    brand: "Executive Wear",
    rating: 4.6,
    description: "Elegant grey formal trouser suitable for office and business meetings.",
    stock: { m: 5, l: 5, xl: 4, xxl: 2 },
    category: "pant&trouser",
    color: "Grey",
    material: "Polyester Viscose Blend",
    careInstructions: ["Dry clean recommended", "Iron medium heat", "Do not bleach"]
  },
  // ✅ TROUSER 2
  {
    id: "SKU-TRS002",
    name: "Navy Blue Formal Trouser",
    title: "Premium Navy Office Trouser",
    img: "https://images.unsplash.com/photo-1719473458937-d42f1f9aad00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    images: [
      { img: "https://images.unsplash.com/photo-1719473458937-d42f1f9aad00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" },
      { img: "https://i.imghippo.com/files/0Vr6698wC.jpg" }
    ],
    oldPrice: 2400,
    price: 1890,
    discount: "21% OFF",
    brand: "Classic Men",
    rating: 4.5,
    description: "Soft and comfortable navy trousers ideal for business and formal occasions.",
    stock: { m: 6, l: 5, xl: 3, xxl: 2 },
   category: "pant&trouser",
    color: "Navy Blue",
    material: "70% Polyester, 30% Viscose",
    careInstructions: ["Dry clean only", "Do not bleach", "Hang to dry"]
  },
  // ✅ TROUSER 3
  {
    id: "SKU-TRS003",
    name: "Stretch Fit Black Trouser",
    title: "Modern Black Stretch Trouser",
    img: "https://images.unsplash.com/photo-1666792494266-16d83aaf1105?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    images: [
      { img: "https://images.unsplash.com/photo-1666792494266-16d83aaf1105?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735" },
      { img: "https://media.istockphoto.com/id/1057621990/photo/clothing-items-washed-cotton-fabric-texture-with-seams.webp?a=1&s=612x612&w=0&k=20&c=-jaXC0Llmlp8laF6lXYGezlxJkUZ0mzgfjOJ_uHVyNY=" }
    ],
    oldPrice: 2600,
    price: 2050,
    discount: "21% OFF",
    brand: "Formal Edge",
    rating: 4.7,
    description: "Comfortable stretch fabric trouser that maintains a clean and sharp look.",
    stock: { m: 5, l: 5, xl: 4, xxl: 2 },
    category: "pant&trouser",
    color: "Black",
    material: "Polyester + Elastane",
    careInstructions: ["Machine wash gentle", "Do not tumble dry", "Iron low heat"]
  }
];

const PantTrouser = () => {
    return (
       <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 mt-10'>
                  {
                     pantTrouserCollctions.map((detail)=><ProductCard key={detail.id} detail={detail}/>)
                  }
                 </div>
    );
};

export default PantTrouser;