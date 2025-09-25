import ProductCard from "./Card";


export default function ProductsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <ProductCard
        img="https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg"
        discount="20% OFF"
        name="Panjabi"
        rating={4}
        price={1200}
        title="Comfortable Cotton Panjabi"
      />
      <ProductCard
        img="https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg"
        discount="20% OFF"
        name="Panjabi"
        rating={4}
        price={1200}
        title="Comfortable Cotton Panjabi"
      />
      <ProductCard
        img="https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg"
        discount="20% OFF"
        name="Panjabi"
        rating={4}
        price={1200}
        title="Comfortable Cotton Panjabi"
      />
      <ProductCard
        img="https://api.believerssign.com.bd/public/category/cD0ozaELxhOuTWp-TYj.jpg"
        discount="20% OFF"
        name="Panjabi"
        rating={4}
        price={1200}
        title="Comfortable Cotton Panjabi"
      />
    
    </div>
  )
}
