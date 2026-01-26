"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import products from "@/app/JsonData/HotDeals.json";
import Link from "next/link";

import toast from "react-hot-toast";

import hotDealBanner from "@/public/HotDeals-banner1.png";

interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  lessprice?: string;
  review?: string;
  sold?: string;
  sale?: string;
  qty?: number;
}

export default function HotDeals() {
  const handleAddToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // toast...
    } else {
      cart.push({ ...product, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} Ditambahkan ke keranjang`);
    }
  };

  const handleAddToWishlist = (product: Product) => {
    const wishlist: Product[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]",
    );

    const existingProduct = wishlist.find((item) => item.id === product.id);

    if (existingProduct) {
      // toast...
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
        <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded font-bold tracking-tight">
            Hot Deals Today
          </h1>
        </div>

        {/* Banner + Carousel */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Banner */}
          <div className="hot-deal-banner relative w-full lg:w-1/3 min-h-[495px] rounded-3xl overflow-hidden shadow-lg hover:translate-y-1 hover:shadow-2xl transition-all duration-300">
            {/* Full cover image */}
            <Image
              src={hotDealBanner}
              alt="Indonesian Art Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Button di tengah bawah */}
            <Link href="/UI-Components/Shop">
              <button className="EB_Garamond absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Product Carousel */}
          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                1200: { slidesPerView: 3 },
                991: { slidesPerView: 2.5 },
                575: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    key={product.id}
                    className="product-wrap border border-gray-600 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
                  >
                    <div className="relative flex justify-center items-center w-full h-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="object-contain max-h-full"
                      />
                      <div
                        onClick={() => handleAddToWishlist(product)}
                        className="absolute bottom-2 right-2"
                      >
                        <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                      </div>
                      <span
                        className={`absolute off-product top-0 right-0 px-4 py-2 EB_Garamond text-xs font-bold text-white rounded ${product.sale === "New" ? "bg-yellow-400" : product.sale.includes("%") ? "bg-red-500" : "opacity-0"}`}
                      >
                        {product.sale}
                      </span>
                    </div>
                    <div className="space-y-1 mt-5 product-info">
                      <Link
                        href={{
                          pathname: "/UI-Components/Shop",
                          query: { id: product.id },
                        }}
                      >
                        <div className="space-y-2 mt-3 product-info">
                          <div className="flex flex-col">
                            {/* Harga utama */}
                            <span className="text-base font-semibold text-[var(--prim-color)]">
                              {product.price}{" "}
                              <span className="text-gray-500 text-sm">
                                /Pcs
                              </span>
                            </span>
                            {/* Harga coret */}
                            <span className="text-gray-400 text-sm line-through">
                              {product.lessprice}
                            </span>
                          </div>

                          {/* Review */}
                          <span className="flex items-center text-yellow-500 text-sm">
                            <i className="bi bi-star-fill me-1"></i>{" "}
                            {product.review}
                          </span>

                          {/* Judul Produk */}
                          <h2 className="text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                            {product.title}
                          </h2>

                          {/* Seller */}
                          <h6 className="text-sm text-gray-600 flex items-center gap-1">
                            <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                            By indoshop
                          </h6>

                          {/* Sold */}
                          <h3 className="text-sm text-gray-500">
                            Sold: {product.sold}
                          </h3>
                        </div>
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="EB_Garamond w-full py-3 mt-3 font-semibold text-white text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 transition-all duration-300 ease-in-out text-sm rounded-b-xl flex items-center justify-center gap-2"
                      >
                        Add to Cart <i className="bi bi-cart"></i>
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
