import Image from "next/image";
import deliveryMan from "@/public/Delivery.png";

export default function Banner() {
  return (
    <div className="px-[5%] md:px-[8%] lg:px-[12%] py-6 md:py-2">
      <div className="relative -my-20  w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
        <div className="relative w-full h-full group">
          <Image
            src={deliveryMan}
            alt="Delivery Man"
            className="w-full h-auto object-contain"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className=" EB_Garamond opacity-0 group-hover:opacity-100
             px-6 md:px-8 lg:px-10 
             py-3 md:py-4 lg:py-2 
             rounded-xl md:rounded-2xl lg:rounded-full font-semibold 
             bg-gradient-to-r from-[var(--prim-color)] to-[var(--prim-color)]/80 
             backdrop-blur-sm text-white 
             shadow-lg hover:shadow-xl hover:scale-105 
             hover:from-white hover:to-white hover:text-[var(--prim-color)] 
             transition-all duration-500 border border-[var(--prim-color)] 
             text-base md:text-sm lg:text-sm tracking-wide"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
