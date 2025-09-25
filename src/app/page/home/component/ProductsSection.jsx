// components/ProductsSection.js
import Image from "next/image"
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
            
<Image
  src="https://images.unsplash.com/photo-1532284166236-8a7bb97578e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuamFiaXxlbnwwfHwwfHx8MA%3D%3D"
  alt="Shirt"
  width={300}
  height={300}
  className="rounded-lg"
/>
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
