// import { CarouselDemo } from "@/components/Carousel";
import PopularDeals from "@/components/PopularDeals";
import ShopWithUs from "@/components/ShopWithUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" max-w-fit ">
      
        <div className="md:w-[80%] mx-auto bg-[#F8F8F8]">
          <img
            src= "https://images.unsplash.com/photo-1609867271967-a82f85c48531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmclMjBtYXRlcmlhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="hero"
            className="w-full h-96 object-cover"
            
          />
        </div>
         
         <PopularDeals/>
         <ShopWithUs/>
         <WhyChooseUs/>
      
     
      
      
      
    </div>
  );
}
