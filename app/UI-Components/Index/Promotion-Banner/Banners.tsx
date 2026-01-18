import Image, { StaticImageData } from "next/image";

import promotionBanner1 from "@/public/Promotion-banner1.jpg";
import promotionBanner2 from "@/public/Promotion-banner2.jpg";
import promotionBanner3 from "@/public/Promotion-banner3.jpg";
import promotionBanner4 from "@/public/Promotion-banner4.jpg";

type BannerType = {
  image: StaticImageData;
  heading: string;
};

const banners: BannerType[] = [
  { image: promotionBanner1, heading: "" },
  {
    image: promotionBanner2,
    heading: "",
  },
  {
    image: promotionBanner3,
    heading: "",
  },
  {
    image: promotionBanner4,
    heading: "",
  },
];

export default function Banners() {
  return (
    <div className="px-[8%] lg:px-[12%] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

            <div className="banner-content absolute bottom-[5%] left-[5%] text-white">
              <h2 className="EB_Garamond font-bold text-3xl leading-11 whitespace-pre-line drop-shadow-md">
                {banner.heading}
              </h2>
              <button
                className="relative px-3 py-1 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                Shop Now <i className="bi bi-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
