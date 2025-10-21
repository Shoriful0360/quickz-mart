"use client";
import { useRef, useState } from "react";
import panjabi from '@/app/asset/panjabi.jpg'



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaMinus } from 'react-icons/fa'
import { TbCoinTakaFilled } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { Button } from "@/components/ui/button";
import ProductCard from "../../home/component/Card";
import ProductsSection from "../../home/component/ProductsSection";
import Link from "next/link";

const images = [
  {
    img: 'https://api.believerssign.com.bd/public/product/sKoSvgmy-FeuwI7rHZx.jpg'
  }, {
    img: 'https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg'
  }
]
function page() {
  const imgRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [url, setUrl] = useState(
    'https://api.believerssign.com.bd/public/product/sKoSvgmy-FeuwI7rHZx.jpg'
  )

  const[products,setProducts]=useState({
    id: "SKU-B0123",
    name: "Box Office News!",
    price: 400,
    oldPrice: 1000,
    size: "",
    quantity: 1,
    image: images[0].img,
  })

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", // 2x zoom
    });
  };


  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };


  // handle change
  const handleChange=(key,value)=>{
    setProducts((prev)=>({...prev,[key]:value}))
  }

// function
const handleCount = (type) => {
  setProducts((prev)=>{
    let newQuantity=prev.quantity;
    if(type==='-'&& prev.quantity>1) newQuantity=prev.quantity-1;
    if(type==='+') newQuantity=prev.quantity + 1;
    
    // total price
    const newPrice=prev.price * newQuantity;
    return {
      ...prev,
      quantity:newQuantity,
      price:newPrice
    }
  })
  
};

// add to cart local storage
const handleAddToCart=()=>{
  const cart=JSON.parse(localStorage.getItem('cart')) || []
  const isexisting=cart.find((item)=>item.id===products.id && item.size===products.size)
  if(isexisting){
 alert("✅ all ready Added to cart!");
  }else{
    cart.push(products)
  }
  localStorage.setItem('cart',JSON.stringify(cart))
      alert("✅ Added to cart!");

}

  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-10">
       <div className="flex flex-col lg:flex-row lg:h-[700px] ">

          {/* Main Image with Zoom */}
    <div className="w-full relative border sm:overflow-hidden mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
      <div
        ref={imgRef}
        className="w-full h-full transition-transform duration-300"
        style={zoomStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={url}
          alt="product"
          fill
          className="object-cover cursor-zoom-in"
        />
      </div>

   {/* Small Thumbnail */}
<div className="flex items-center gap-2 flex-wrap mt-2 
            
              absolute  -bottom-0
                bg-white/80 p-2 rounded-md">
  {images?.map((img, i) => (
    <div
      key={i}
      className="relative w-14 h-14 sm:w-20 sm:h-20 border cursor-pointer"
      onClick={() => setUrl(img?.img)}
    >
      <Image
        src={img?.img}
        alt="thumbnail"
        fill
        className="object-cover rounded"
      />
    </div>
  ))}
</div>

    </div>

          {/* Product Info */}
          <div className="border h-full p-4 space-y-4">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <div className="flex justify-between">
              <h4>SKU:B0122</h4>
              <div className="flex gap-2 text-2xl">
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>

            <div className="divider"></div>

            <p className="flex gap-2 items-center">
              <span className="font-bold line-through text-xl">&#2547;1000</span>
              <span className="text-3xl text-destructive flex items-center">
                <TbCoinTakaFilled />400
              </span>
            </p>
            <p className="text-xl">
              <span className="font-bold">Brand:</span> Stock out
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <p>Size :    </p>
              
                <div>
            {["m", "l", "xl", "xxl"].map((s) => (
              <span
                key={s}
                onClick={() => handleChange("size", s)}
                className={`border cursor-pointer ml-2 px-4 py-2 text-center ${
                  products.size === s ? "bg-black text-white" : ""
                } border-black`}
              >
                {s.toUpperCase()}
              </span>
            ))}
          </div>
        
           <p>Quantity:</p>
           <div>
             <button onClick={()=>handleCount('-')} className="border px-5 text-2xl cursor-pointer py-3 ">-</button>
             <button  className="border px-5 text-2xl cursor-pointer py-3 ">{products.quantity}</button>
             <button onClick={()=>handleCount('+')} className="border px-5 text-2xl cursor-pointer py-3 ">+</button>
           </div>
           <div className="divider"></div>
           {/* button */}
         <div className="flex gap-4 ">
  {/* Add to Cart Button */}
  <button 
  onClick={handleAddToCart}
  className="flex-1  cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300">
    Add to Cart
  </button>

  {/* Buy Now Button */}
 <Link href={'/page/checkout'}> 
 <button className="flex-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300">
    Buy Now
  </button>
  </Link>
</div>
          </div>

        </div>

      {/* specification */}
      <div className="shadow-2xl px-10 py-10 rounded-md space-y-4">
        <div>
          <Image
            src={panjabi}
          />
          <p className="text-xl font-semibold">A timeless blend of elegance and comfort— our Panjabi ensures a refined look for every celebration.</p>
        </div>
        <h1 className="font-bold text-2xl">Specification:</h1>
        <ul className="text-xl font-sans">
          <li>✅ Color - Navy Blue</li>
          <li>✅ Fabric - Twill Cotton</li>
          <li>✅ GSM - 260-265</li>
          <li>✅ Drawstring for an adjustable fit</li>
          <li>✅ Super Quality Zipper Fly & Elastic</li>
          <li>✅ Zippered Side Pockets</li>
          <li>✅ Premium Hand Feel with Fine Finish</li>
          <li>✅ Highly Durable, Breathable & Comfortable</li>
          <li>✅ Slim Fit</li>
        </ul>

        <h2 className="text-xl font-bold">🔻Care Instruction:</h2>
        <ol className="text-xl font-semibold ml-2">
              
          <li>1.Do not bleach.</li>
          <li>2.Do not tumble dry.</li>
          <li>3.Please do not keep it wet for a long time.</li>
          <li>4. Don’t dry in the sun for a long time.</li>
          <li>5.Use cold water.   </li>  
        </ol>

        <h3><span className="text-2xl font-bold">◾ Color/Image Disclaimer:.</span> Actual product color and design may vary slightly from images due to monitor settings and lighting conditions</h3>

      </div>

      {/* relatate product */}
    <div className="">
      <h1 className="text-3xl font-bold text-center">Related Product </h1>
        <ProductsSection/>
    </div>
          </div>


  )
}

export default page