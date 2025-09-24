// components/FeaturesSection.js
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa"

export default function FeaturesSection() {
  const features = [
    { icon: FaShippingFast, title: "Fast Delivery", desc: "Get your orders quickly with our express delivery service." },
    { icon: FaLock, title: "Secure Payment", desc: "Safe and secure payment options for worry-free shopping." },
    { icon: FaHeadset, title: "24/7 Support", desc: "We are here to help you anytime with our friendly support team." },
  ]
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-10 text-center">
        {features.map((f, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow hover:shadow-lg transition">
            <f.icon className="mx-auto text-red-500 text-5xl mb-4" />
            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
