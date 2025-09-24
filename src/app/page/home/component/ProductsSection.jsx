// components/ProductsSection.js
import Link from "next/link"

export default function ProductsSection() {
  const products = [
    { name: "Atar", price: "$25", img: "https://source.unsplash.com/300x300/?shirt" },
    { name: "Panjabi", price: "$30", img: "https://source.unsplash.com/300x300/?clothes" },
    { name: "Shirt", price: "$20", img: "https://source.unsplash.com/300x300/?shirt,men" },
    { name: "Pant & Trouser", price: "$35", img: "https://source.unsplash.com/300x300/?trouser,men" },
  ]
  return (
    <section className="py-20">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Popular Products</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg overflow-hidden transition">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-red-500 font-bold">{p.price}</p>
                <Link href={`/page/products/${p.name.toLowerCase()}`}>
                  <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
