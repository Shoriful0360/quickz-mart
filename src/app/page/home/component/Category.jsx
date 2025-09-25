

import Image from "next/image"

const categories = [
  {
    name: "Atar",
    img: "https://api.believerssign.com.bd/public/category/HrJi_hHGUHgtkzXCuuJ.jpg"
  },
  {
    name: "Panjabi",
    img: "https://api.believerssign.com.bd/public/category/BL9RylkLSguJ7hMw8Zh.jpg"
  },
  {
    name: "Shirt",
    img: "https://plus.unsplash.com/premium_photo-1750895097049-66150f3f4052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
  },
  {
    name: "Pant",
    img: "https://images.unsplash.com/photo-1714143136385-c449be6760f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
  },
  {
    name: "T-Shirt",
    img: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

export default function CategorySection() {
  return (
    <section className="py-10 px-5">

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {categories.map((cat, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative  h-48 md:h-56 rounded-xl overflow-hidden py-5 shadow-lg">
              <Image 
                src={cat.img}
                alt={cat.name}
                fill
                className="object-content group-hover:scale-105 transition duration-500 "
              />
            </div>
            <p className="text-center mt-3 text-lg font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
