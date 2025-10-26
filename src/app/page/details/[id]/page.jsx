"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartsSlice";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import ProductsSection from "../../home/component/ProductsSection";
import panjabi from "@/app/asset/panjabi.jpg";

const images = [
  { img: "https://api.believerssign.com.bd/public/product/sKoSvgmy-FeuwI7rHZx.jpg" },
  { img: "https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg" },
];

export default function Page() {
  const dispatch = useDispatch();
  const imgRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({});
  const [url, setUrl] = useState(images[0].img);

  // ✅ initial product state
  const [products, setProducts] = useState({
    id: "SKU-B0123",
    name: "Box Office News!",
    price: 400,
    oldPrice: 1000,
    image: images[0].img,
    size: "",
    sizeQuantities: { m: 1, l: 1, xl: 1, xxl: 1 },
    stock: { m: 5, l: 3, xl: 2, xxl: 8 }, // ✅ each size stock
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
    setProducts((prev) => ({ ...prev, size }));
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
      name: products.name,
      image: products.image,
      size: products.size,
      quantity: products.sizeQuantities[products.size],
      price: products.price,
    };

    dispatch(addToCart(productToAdd));
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${products.name} (${products.size.toUpperCase()}) added successfully!`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-10">
      <div className="flex flex-col lg:flex-row lg:h-[700px]">
        {/* 🖼️ Product Image */}
        <div className="w-full relative border sm:overflow-hidden mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
          <div
            ref={imgRef}
            className="w-full h-full transition-transform duration-300"
            style={zoomStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={url} alt="product" fill className="object-cover cursor-zoom-in" />
          </div>

          {/* Thumbnail */}
          <div className="flex items-center gap-2 flex-wrap mt-2 absolute -bottom-0 bg-white/80 p-2 rounded-md">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-14 h-14 sm:w-20 sm:h-20 border cursor-pointer"
                onClick={() => setUrl(img.img)}
              >
                <Image src={img.img} alt="thumbnail" fill className="object-cover rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* 🛍️ Product Info */}
        <div className="border h-full p-6 space-y-6 rounded-xl shadow-lg bg-white">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">{products.name}</h1>
            <div className="flex gap-3 text-2xl text-gray-600">
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <h4 className="text-lg">SKU: {products.id}</h4>
            <p className="font-semibold">
              <span className="text-green-600">In Stock</span>
            </p>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* 💰 Price */}
          <p className="flex gap-3 items-center">
            <span className="line-through text-gray-400 text-xl">৳{products.oldPrice}</span>
            <span className="text-3xl font-bold text-red-600 flex items-center">
              <TbCoinTakaFilled /> {products.price}
            </span>
          </p>

          {/* ✨ Description */}
          <p className="text-gray-700 leading-relaxed">
            A timeless blend of elegance and comfort—our Panjabi ensures a refined look for every
            celebration.
          </p>

          {/* 👕 Size Select with stock display */}
          <div>
            <p className="font-semibold text-lg mb-2">Select Size:</p>
            <div className="flex gap-3 flex-wrap">
              {["m", "l", "xl", "xxl"].map((s) => (
                <span
                  key={s}
                  onClick={() => handleSizeSelect(s)}
                  className={`px-5 py-2 border rounded-lg cursor-pointer transition ${
                    products.size === s
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-400"
                  }`}
                >
                  {s.toUpperCase()}{" "}
                  <span className="text-sm text-gray-500 ml-1">
                    ({products.stock[s]} in stock)
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* 🧮 Quantity Control */}
          {products.size && (
            <div className="space-y-3 mt-4">
              <p className="font-semibold text-lg">
                Quantity for <span className="uppercase">{products.size}</span>:
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCount("-")}
                  className="border rounded-lg px-5 py-2 text-2xl font-bold hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-2xl font-semibold w-10 text-center">
                  {products.sizeQuantities[products.size]}
                </span>
                <button
                  onClick={() => handleCount("+")}
                  className="border rounded-lg px-5 py-2 text-2xl font-bold hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* 🛒 Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
            >
              🛒 Add to Cart
            </button>

            <Link href={"/page/checkout"} className="flex-1">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
                ⚡ Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 📋 Specification Section */}
      <div className="shadow-2xl px-10 py-10 rounded-md space-y-4">
        <Image src={panjabi} alt="panjabi" />
        <p className="text-xl font-semibold">
          A timeless blend of elegance and comfort— our Panjabi ensures a refined look for every
          celebration.
        </p>
        <h1 className="font-bold text-2xl">Specification:</h1>
        <ul className="text-xl font-sans">
          <li>✅ Color - Navy Blue</li>
          <li>✅ Fabric - Twill Cotton</li>
          <li>✅ GSM - 260-265</li>
          <li>✅ Adjustable Drawstring Fit</li>
          <li>✅ Super Quality Zipper Fly & Elastic</li>
          <li>✅ Zippered Side Pockets</li>
          <li>✅ Breathable & Comfortable</li>
          <li>✅ Slim Fit</li>
        </ul>
      </div>

      {/* 🔁 Related Products */}
      <div>
        <h1 className="text-3xl font-bold text-center">Related Products</h1>
        <ProductsSection />
      </div>
    </div>
  );
}
