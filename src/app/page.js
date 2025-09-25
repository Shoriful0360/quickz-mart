import Image from "next/image";
import HeroSection from "./page/home/component/HeroSection";
import FeaturesSection from "./page/home/component/FeatureSection";
import ProductsSection from "./page/home/component/ProductsSection";
import TestimonialsSection from "./page/home/component/TestimonialsSection";
import Slide from "./page/home/component/Slide";


export default function Home() {
  return (
    <div className="">

<div className="h-[400] md:h-[600] lg:h-[700] xl:h-[750]">
  <Slide />
</div>
    <FeaturesSection/>
    <ProductsSection/>
    <TestimonialsSection/>
    </div>
  );
}
