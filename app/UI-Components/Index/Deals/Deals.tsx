"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

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
  className?: string;
};

const dealsData: DealItem[] = [
  { image: Deal1, title: "Fresh Vegetables" },
  { image: Deal2, title: "Daily Snacks", className: "deals-wrap2" },
  { image: Deal3, title: "Daily Snacks", className: "deals-wrap3" },
  { image: Deal4, title: "Daily Snacks", className: "deals-wrap4" },
  { image: Deal5, title: "Daily Snacks", className: "deals-wrap5" },
  { image: Deal6, title: "Daily Snacks", className: "deals-wrap6" },
  { image: Deal7, title: "Daily Snacks", className: "deals-wrap7" },
];

import products from "@/app/JsonData/BestDeals.json";
import toast from "react-hot-toast";

export default function Deals() {
  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} Ditambahkan ke keranjang`, {
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
          <h1 className="text-5xl Unbounded font-bold tracking-tight">
            Today Featured Artwork
          </h1>
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
              <button className=" EB_Garamond relative px-6 py-3 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                Shop Now <i className="bi bi-arrow-right ps-2"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Best Deals Product */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.Id}
              className="product-wrap border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative flex justify-center items-center w-full h-56 bg-gray-50 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Product Info */}
              <Link
                href={{
                  pathname: "/UI-Components/Shop",
                  query: { id: product.Id },
                }}
              >
                <div className="space-y-2 mt-3 product-info">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-[var(--prim-color)]">
                      {product.price}{" "}
                      <span className="text-gray-500 text-sm">/Pcs</span>
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      {product.lessprice}
                    </span>
                  </div>

                  <span className="flex items-center text-yellow-500 text-sm">
                    <i className="bi bi-star-fill me-1"></i> {product.review}
                  </span>

                  <h2 className="text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                    {product.title}
                  </h2>

                  <h6 className="text-sm text-gray-600 flex items-center gap-1">
                    <i className="bi bi-shop text-[var(--prim-color)]"></i> By indoshop
                  </h6>

                  <h3 className="text-sm text-gray-500">Sold: {product.sold}</h3>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="EB_Garamond w-full py-3 mt-3 font-semibold text-white text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 text-sm rounded-b-xl flex items-center justify-center gap-2"
              >
                Add to Cart <i className="bi bi-cart"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}