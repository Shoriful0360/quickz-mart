// components/TestimonialsSection.js
export default function TestimonialsSection() {
  const testimonials = [
    { name: "John Doe", feedback: "Great products and fast delivery!" },
    { name: "Jane Smith", feedback: "Amazing quality and excellent support." },
    { name: "Ali Khan", feedback: "I love shopping at QuickMart, highly recommended!" },
  ]
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-600 dark:text-gray-300 mb-4">"{t.feedback}"</p>
              <h4 className="font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
