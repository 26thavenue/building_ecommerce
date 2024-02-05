import { CarouselDemo } from "@/components/Carousel";
import PopularDeals from "@/components/PopularDeals";
import ShopWithUs from "@/components/ShopWithUs";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <div className="  ">
      <CarouselDemo />
      <PopularDeals/>
      <ShopWithUs/>
      <WhyChooseUs/>
    </div>
  );
}
