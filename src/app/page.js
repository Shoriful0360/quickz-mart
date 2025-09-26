
import FeaturesSection from "./page/home/component/FeatureSection";
import ProductsSection from "./page/home/component/ProductsSection";
import Slide from "./page/home/component/Slide";
import CategorySection from "./page/home/component/Category";
import ReviewCard from "./page/home/component/testimonial/ReviewCard";



export default function Home() {
  return (
    <div className="">

<div className="h-[400] md:h-[600] lg:h-[700] xl:h-[750]">
  <Slide />
</div>
    <FeaturesSection/>
      <div className="divider text-2xl font-bold">Shop by Category</div>
      <CategorySection/>
    <ProductsSection/>
    <ReviewCard/>
    </div>
  );
}
