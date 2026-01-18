"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deal1 from "@/public/Deals-bg1.png";
import Deal2 from "@/public/Deals-bg2.png";
import Deal3 from "@/public/Deals-bg3.png";
import Deal4 from "@/public/Deals-bg4.png";
import Deal5 from "@/public/Deals-bg5.png";
import Deal6 from "@/public/Deals-bg6.png";
import Deal7 from "@/public/Deals-bg7.png";

type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealsData: DealItem[] = [
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description:
      "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
  },
  {
    image: Deal2,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap2",
  },
  {
    image: Deal3,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap3",
  },
  {
    image: Deal4,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap4",
  },
  {
    image: Deal5,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap5",
  },
  {
    image: Deal6,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap6",
  },
  {
    image: Deal7,
    title: "Daily Snacks",
    description:
      "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap7",
  },
];

import products from "@/app/JsonData/BestDeals.json";

import toast from "react-hot-toast";

export default function Deals() {
  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} is already in the cart`, {
        icon: "⚡",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      cart.push({ ...product, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));

      window.dispatchEvent(new Event("storageUpdate"));

      toast.success(`${product.title} added to cart`);
    }
  };

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Today's Featured Artwork</h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
        speed={1500}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          991: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }}
      >
        {dealsData.map((deal, index) => (
          <SwiperSlide key={index}>
            <div
              className={`deals-wrap px-5 py-6 rounded-2xl flex justify-center items-center ${deal.className || ""}`}
            >
              <button className="px-5 py-2 rounded-full text-white font-bold bg-[var(--prim-color)] hover:bg-white hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer">
                Shop Now <i className="bi bi-arrow-right ps-2"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Best Deals Product */}
      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.Id}
              className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--
                prim-color)] cursor-pointer duration-300"
            >
              <div className="relative flex justify-center items-center w-full h-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
