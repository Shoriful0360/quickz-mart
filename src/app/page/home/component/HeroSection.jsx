// components/HeroSection.js
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-500  py-20">
      <div className="w-10/12 mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to QuickMart</h1>
        <p className="text-xl mb-8">Your one-stop online store for fashion & lifestyle products.</p>
        <Link href="/page/products">
          <button className="px-8 py-3 bg-white text-red-500 font-bold rounded-lg hover:bg-gray-100 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  )
}
