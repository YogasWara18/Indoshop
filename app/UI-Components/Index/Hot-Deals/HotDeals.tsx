"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import products from "@/app/JsonData/HotDeals.json";
import Link from "next/link";

import toast from "react-hot-toast";

import hotDealBanner from "@/public/HotDeals-banner1.png";

export default function HotDeals() {
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

  const handleAddToWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: any) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} is already in the wishlist`, {
        icon: "⚡",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      wishlist.push({ ...product, qty: 1 });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      window.dispatchEvent(new Event("storageUpdate"));

      toast.success(`${product.title} added to wishlist!`);
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] pb-10">
        <div className="title my-10 my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded">Hot Deals Today.</h1>
        </div>

        {/* Banner + Carousel */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Banner */}
          <div className="hot-deal-banner relative w-full lg:w-1/3 min-h-[450px] rounded-3xl overflow-hidden shadow-lg hover:translate-y-1 hover:shadow-2xl transition-all duration-300">
            {/* Full cover image */}
            <Image
              src={hotDealBanner}
              alt="Indonesian Art Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Button di tengah bawah */}
            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
              Shop Now
            </button>
          </div>

          {/* Product Carousel */}
          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false, // agar tetap jalan meski user interaksi
              }}
              loop={true} // aktifkan loop agar berulang terus
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {products.map((product: any) => (
                <SwiperSlide key={product.Id} className="h-full">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 flex flex-col justify-between items-center h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="rounded-xl mb-4 object-cover"
                    />
                    <h2 className="text-xl font-semibold text-white mb-2 text-center">
                      {product.title}
                    </h2>
                    <p className="text-yellow-300 font-bold mb-4 text-center">
                      {product.price}
                      <span className="line-through text-gray-400 ml-2">
                        {product.lessprice}
                      </span>
                    </p>
                    <div className="flex gap-3 mt-auto">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold hover:scale-105 transition-transform"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
                      >
                        Wishlist
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
