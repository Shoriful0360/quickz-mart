"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
// import ProductsSection from "../../home/component/ProductsSection";
import panjabi from "@/app/asset/panjabi.jpg";
import atar from "@/app/asset/atar.png";
import pantTrouser from "@/app/asset/pant&trouser.png";
import shirt from "@/app/asset/shirt.png";
import { addToCart } from "@/app/page/redux/cartsSlice";


export default function ProductInfo({ details }) {
  const { code, name, title, img, images, oldPrice, price, discount, brand, rating, description, stock, category, color, material, careInstruction, _id } = details || {}

  const dispatch = useDispatch();
  const imgRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [url, setUrl] = useState(img);
    const [selectedSize, setSelectedSize] = useState(null);
  const [availableStock, setAvailableStock] = useState(null)

  // ✅ initial product state
  const [products, setProducts] = useState({
    id: _id,
    code: code,
    name: name,
    price: 400,
    oldPrice: 1000,
    image: url,
    size: "",
    sizeQuantities: { m: 1, l: 1, xl: 1, xxl: 1 },
    stock: stock, // ✅ each size stock
  });

  // ✅ Image zoom handlers
  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(2)" });
  };
  const handleMouseLeave = () => setZoomStyle({ transform: "scale(1)" });

  // ✅ handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    setProducts((prev) => ({ ...prev, size }));
        setAvailableStock(products.stock[size]); 
  };


  // ✅ handle quantity increment/decrement with stock check
  const handleCount = (type) => {
    if (!products.size) {
      Swal.fire({
        icon: "warning",
        title: "Please Select a Size",
        text: "Choose a size before changing quantity.",
      });
      return;
    }

    setProducts((prev) => {
      const newSizeQuantities = { ...prev.sizeQuantities };
      let currentQty = newSizeQuantities[prev.size];
      const currentStock = prev.stock[prev.size];

      if (type === "-" && currentQty > 1) currentQty -= 1;
      if (type === "+") {
        if (currentQty >= currentStock) {
          Swal.fire({
            icon: "error",
            title: "Out of Stock",
            text: `Only ${currentStock} items available in size ${prev.size.toUpperCase()}.`,
          });
          return prev; // stop here
        }
        currentQty += 1;
      }

      newSizeQuantities[prev.size] = currentQty;
      return { ...prev, sizeQuantities: newSizeQuantities };
    });
  };

  // ✅ add to cart (Redux + SweetAlert)
  const handleAddToCart = () => {
    if (!products.size) {
      Swal.fire({
        icon: "warning",
        title: "Please Select a Size",
        text: "Choose your preferred size before adding to cart.",
      });
      return;
    }

    const productToAdd = {
      id: products.id,
      code: products.code,
      name: products.name,
      image: products.image,
      size: products.size,
      quantity: products.sizeQuantities[products.size],
      price: products.price,
      oldPrice: oldPrice,
      stock:availableStock
    };

    dispatch(addToCart(productToAdd));
    
  };

  return (
    <div className="w-full  mx-auto mt-10 px-4 lg:px-0 space-y-10 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">

      {/* 🔹 Main Product Section */}
      <div className="flex flex-col lg:flex-row border rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500">

        {/* 🖼️ Product Image Section */}
        <div className="w-full flex-1 relative mx-auto aspect-[4/5] sm:aspect-[3/4] md:aspect-[2/3] overflow-hidden">
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
              className="object-cover cursor-zoom-in rounded-t-xl lg:rounded-l-xl"
               sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
            />
          </div>

          {/* 🔸 Thumbnails */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 flex-wrap bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 rounded-lg shadow-md transition">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-12 h-12 sm:w-16 sm:h-16 border border-gray-300 dark:border-gray-600 cursor-pointer rounded-md overflow-hidden hover:scale-105 transition-transform"
                onClick={() => {
                  setUrl(img.img)
                  setProducts((prev) => ({ ...prev, image: img.img }))
                }}
              >
                <Image src={img.img} alt="thumbnail" fill className="object-cover"   sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw" />
              </div>
            ))}
          </div>
        </div>

        {/* 🛍️ Product Info Section */}
        <div className="flex-1 h-full p-5 sm:p-8 space-y-6 rounded-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <div className="flex gap-3 text-2xl text-gray-600 dark:text-gray-300">
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 flex-wrap gap-2">
            <h4 className="text-sm sm:text-lg">Code: {code}</h4>
            <p className="font-semibold text-sm sm:text-base">
              <span className="text-green-600">In Stock</span>
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* 💰 Price */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="line-through text-gray-400 text-lg sm:text-xl">৳{oldPrice}</span>
            <span className="text-2xl sm:text-3xl font-bold text-red-600 flex items-center">
              <TbCoinTakaFilled /> {price}
            </span>
            <span className="text-red-500 text-sm sm:text-base">{discount}</span>
          </div>

          {/* ✨ Description */}
          <p className="leading-relaxed text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {description}
          </p>

          {/* 👕 Size Select */}
          <div>
           
              <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Select Size:
      </h3>

      <div className="flex gap-3 flex-wrap">
        {["m", "l", "xl", "xxl"].map((s) => (
          <span
            key={s}
            onClick={() => handleSizeSelect(s)}
            className={`px-4 py-2 border rounded-lg cursor-pointer text-sm sm:text-base transition ${
              selectedSize === s
                ? "bg-black text-white border-black"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border-gray-400 dark:border-gray-500"
            }`}
          >
            {s.toUpperCase()}{" "}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              ({products.stock[s]} in stock)
            </span>
          </span>
        ))}
      </div>

      {/* নির্বাচিত সাইজ অনুযায়ী stock info */}
      {selectedSize && (
        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          ✅ Selected Size:{" "}
          <span className="font-semibold">{selectedSize.toUpperCase()}</span> —{" "}
          <span className="text-blue-500">{availableStock}</span> in stock
        </div>
      )}
    </div>
          </div>

          {/* 🧮 Quantity */}
          {products.size && (
            <div className="space-y-3 mt-4">
              <p className="font-semibold text-base sm:text-lg">
                Quantity for <span className="uppercase">{products.size}</span>:
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCount("-")}
                  className="border rounded-lg px-5 py-2 text-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 dark:border-gray-500"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-10 text-center">
                  {products.sizeQuantities[products.size]}
                </span>
                <button
                  onClick={() => handleCount("+")}
                  className="border rounded-lg px-5 py-2 text-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 dark:border-gray-500"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* 🧵 Extra Info */}
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-600 text-2xl">ℹ️</span> Product Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <p className="flex justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                <span className="font-medium">Brand:</span>
                <span>{brand || "N/A"}</span>
              </p>

              <p className="flex justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                <span className="font-medium">Category:</span>
                <span>{category || "Fashion"}</span>
              </p>

              <p className="flex justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                <span className="font-medium">Color:</span>
                <span>{color || "Default"}</span>
              </p>

              <p className="flex justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                <span className="font-medium">Material:</span>
                <span>{material || "Not specified"}</span>
              </p>

              <p className="flex justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-1 sm:col-span-2">
                <span className="font-medium">Care Instructions:</span>
                <span>{careInstruction || "Dry clean recommended"}</span>
              </p>
            </div>
          </div>

          {/* 🛒 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-center"
            >
              🛒 Add to Cart
            </button>

            <Link href={`/page/checkout?id=${_id}&quantity=${products.sizeQuantities[products.size]}`} className="flex-1">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-center">
                ⚡ Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 📋 Specification Section */}
      <div className="shadow-lg px-5 sm:px-10 py-8 sm:py-10 rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500 space-y-5">
        <Image
          src={
            category === "Panjabi"
              ? panjabi
              : category === "Attar"
                ? atar
                : category === "Pant&Trouser"
                  ? pantTrouser
                  : shirt
          }
          alt="product"
          className="lg:w-4/12 h-auto rounded-lg object-cover"
        />
        <p className="text-base sm:text-xl font-semibold leading-relaxed">
          A timeless blend of elegance and comfort — our {category} ensures a refined look for every celebration.
        </p>
        <h1 className="font-bold text-xl sm:text-2xl">Specification:</h1>
        <ul className="text-base sm:text-lg font-sans space-y-1">
          <li>✅ Color - {color}</li>
          <li>✅ Fabric - Twill Cotton</li>
          <li>✅ GSM - 260-265</li>
          <li>✅ Adjustable Drawstring Fit</li>
          <li>✅ Super Quality Zipper Fly & Elastic</li>
          <li>✅ Zippered Side Pockets</li>
          <li>✅ Breathable & Comfortable</li>
          <li>✅ Slim Fit</li>
        </ul>
      </div>
    </div>


  );
}