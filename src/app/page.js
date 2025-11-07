
import FeaturesSection from "./page/home/component/FeatureSection";
import ProductsSection from "./page/home/component/ProductsSection";
import Slide from "./page/home/component/Slide";
import CategorySection from "./page/home/component/Category";
import ReviewCard from "./page/home/component/testimonial/ReviewCard";



export default async function Home() {
  return (
    <div className="">

<div className="h-[50vh]">
  <Slide />
</div>

      <div className="divider text-2xl font-bold">Shop by Category</div>
      <CategorySection/>
    <ProductsSection/>
          <FeaturesSection/>
    <ReviewCard/>
    </div>
  );
}
