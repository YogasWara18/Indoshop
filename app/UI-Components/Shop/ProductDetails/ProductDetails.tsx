"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";

import satisfactionIcon from "@/public/ShopDetails.png";

interface ProductType {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
  qty?: number;
}

interface Props {
  id?: string;
  products: ProductType[];
}

export default function ProductDetails({ id, products }: Props) {
  // Jika tidak ada id → tampilkan semua produk
  if (!id) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.Id} className="border p-4 rounded-md">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <h2 className="font-bold mt-2">{product.title}</h2>
              <p className="text-red-500">{product.price}</p>
              {product.lessprice && (
                <p className="line-through text-gray-500">
                  {product.lessprice}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const product = products.find((item) => String(item.Id) === String(id));
  if (!product) return <p>Product Not Found!</p>;

  // State untuk quantity
  const [quantity, setQuantity] = useState<number>(product.qty ?? 1);

  // Add to Cart
  const handleAddToCart = (product: ProductType) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find(
      (item: ProductType) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} sudah ada di keranjang`, {
        icon: "⚡",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      cart.push({ ...product, qty: quantity });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} ditambahkan ke keranjang`);
    }
  };

  // Add to Wishlist
  const handleAddToWishlist = (product: ProductType) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const existingProduct = wishlist.find(
      (item: ProductType) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} sudah ada di wishlist Anda`, {
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
      toast.success(`${product.title} ditambahkan ke wishlist`);
    }
  };

  // Update Quantity
  const handleQtyChange = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updateCart = cart.map((item: ProductType) =>
      item.Id === product.Id ? { ...item, qty: newQty } : item,
    );
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center md:sticky md:top-24 h-fit">
            <div className="border border-gray-300 rounded-2xl w-full max-w-sm md:max-w-md">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain p-10 sm:p-16 md:p-20"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="Unbounded text-3xl">{product.title}</h2>
            <span className="flex items-center border-b border-gray-300 pb-3 text-yellow-500 text-md mt-4">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              &nbsp;
              <span className="text-black font-medium">
                4.7 Star Rating {product.review}
              </span>
            </span>

            <p className="my-3 text-sm sm:text-base leading-relaxed">
              Produk kerajinan Indonesia menghadirkan keindahan tradisi dan
              kualitas premium. Dari batik, ukiran kayu, tenun, hingga keramik,
              setiap karya dibuat dengan tangan terampil pengrajin lokal,
              menjadi simbol budaya, elegansi, dan identitas bangsa.
            </p>

            <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
              <h3 className="Unbounded text-xl sm:text-2xl">{product.price}</h3>
              {product.lessprice && (
                <del className="Unbounded text-gray-500">
                  {product.lessprice}
                </del>
              )}
            </div>

            <span className="my-3 bg-[#f1c6c6c5] px-2 py-3 rounded-md text-sm sm:text-base">
              Penawaran Spesial: <strong> 5 Hari </strong> lagi sebelum
              berakhir!
            </span>

            {/* Quantity */}
            <div>
              <h3 className="mb-3 font-semibold">Quantity :</h3>
              <div className="flex items-center border rounded-full px-2 py-1 w-fit shadow-sm">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition transform hover:scale-105"
                  onClick={() => handleQtyChange(quantity - 1)}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>
                <span className="px-4 text-lg font-medium">{quantity}</span>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition transform hover:scale-105"
                  onClick={() => handleQtyChange(quantity + 1)}
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="EB_Garamond flex items-center justify-center gap-2 bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 transition-all duration-300 ease-in-out text-sm rounded-b-xl text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow hover:bg-white-300 transition transform hover:scale-105"
                >
                  <i className="bi bi-cart-plus text-lg"></i>
                  <span className="font-medium">Add To Cart</span>
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="EB_Garamond flex items-center justify-center gap-2 border border-[var(--prim-color)] text-[var(--prim-color)] px-5 py-3 rounded-lg shadow hover:bg-[var(--prim-color)] hover:text-white transition transform hover:scale-105"
                >
                  <i className="bi bi-heart text-lg"></i>
                  <span className="font-medium">Add To Wishlist</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="border border-gray-300 rounded-md">
              <div className="p-3">
                <div className="flex justify-between items-center gap-2 px-4 py-2 bg-[var(--prim-color)] rounded-full shadow-[0_0_15px_var(--prim-light)] backdrop-blur-md border border-[var(--prim-light)]/40">
                  {/* Brand */}
                  <span className="flex items-center text-white font-medium tracking-wide">
                    <i className="bi bi-shop mr-2 bg-white text-[var(--prim-color)] px-3 py-2 rounded-full shadow-sm"></i>
                    By{" "}
                    <span className="ml-1 font-semibold italic">indoShop</span>
                  </span>

                  {/* Button */}
                  <button className="EB_Garamond flex items-center justify-center gap-2 bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 text-sm rounded-lg text-white px-5 py-2 transform hover:scale-105">
                    <span className="font-medium">View More</span>
                  </button>
                </div>
              </div>
              <div className="bg-[#fdf6f0] rounded-xl shadow-[0_0_15px_var(--prim-light)] border border-[var(--prim-light)]/30 overflow-hidden">
                {/* Pengiriman Cepat */}
                <div className="flex items-center px-7 py-4 border-b border-gray-200 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-truck px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Pengiriman Cepat
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Karya seni dikirim dengan aman dan segera.
                    </p>
                  </div>
                </div>

                {/* Retur 30 Hari */}
                <div className="flex items-center px-7 py-4 border-b border-gray-200 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-arrow-counterclockwise px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Retur 30 Hari
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Belanja tanpa risiko, mudah untuk pengembalian.
                    </p>
                  </div>
                </div>

                {/* Ambil di Toko */}
                <div className="flex items-center px-7 py-4 border-b border-gray-200 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-shop px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Ambil di Toko
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Siap dalam 24 jam di lokasi kami.
                    </p>
                  </div>
                </div>

                {/* Pembayaran Fleksibel */}
                <div className="flex items-center px-7 py-4 border-b border-gray-200 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-credit-card px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Pembayaran Fleksibel
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Bayar di tempat, kartu, atau metode digital.
                    </p>
                  </div>
                </div>

                {/* Garansi */}
                <div className="flex items-center px-7 py-4 border-b border-gray-200 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-shield-check px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Garansi
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Produk asli berkualitas, sesuai ketentuan perlindungan
                      konsumen.
                    </p>
                  </div>
                </div>

                {/* Kemasan Premium */}
                <div className="flex items-center px-7 py-4 gap-3 hover:bg-[var(--white-color)] transition">
                  <i className="bi bi-gift px-3 py-2 rounded-full text-[var(--prim-color)] bg-white shadow-sm"></i>
                  <div className="flex flex-col">
                    <h3 className="Unbounded font-semibold text-[var(--prim-color)]">
                      Kemasan Premium
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Setiap karya dibungkus rapi, mencerminkan nilai dan
                      keanggunan seni Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[var(--prim-light)]/40 mt-10 rounded-lg shadow-[0_0_15px_var(--prim-light)] backdrop-blur-md">
          <div className="flex justify-between items-center border-b p-3 pb-5 border-[var(--prim-light)]/30 gap-2">
            {/* Description Badge */}
            <span className="EB_Garamond flex items-center justify-center bg-[var(--prim-color)] text-white font-semibold text-lg sm:text-xl px-5 py-2 rounded-full shadow-[0_0_15px_var(--prim-light)]">
              Description
            </span>

            {/* Indonesia Art Market Badge */}
            <span className="EB_Garamond flex items-center gap-3 bg-[var(--white-color)] text-[var(--prim-color)] font-semibold text-lg sm:text-xl px-5 py-2 rounded-full border border-[var(--prim-light)]/40 shadow hover:bg-[var(--prim-color)] hover:text-white transition transform hover:scale-105">
              <Image
                src={satisfactionIcon}
                alt="satisfactionIcon"
                className="w-6 h-6"
              />
              Indonesia Art Market
            </span>
          </div>
          <div className="p-5 mt-5 bg-[#fdf6f0] rounded-xl  border border-[var(--prim-light)]/30 backdrop-blur-md">
            <h2 className="Unbounded text-2xl mb-3 text-[var(--prim-color)] font-bold tracking-wide">
              Product Description
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Di setiap momen istimewa dan kebahagiaan, karya seni Indonesia
              selalu hadir, sebagaimana telah diwariskan turun-temurun. Dengan
              ragam kerajinan yang kaya akan sejarah dan filosofi, setiap produk
              menghadirkan kehangatan, keindahan, dan senyum penuh makna bagi
              siapa pun yang memilikinya.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Menyatukan tradisi dan modernitas, kerajinan Nusantara menjadi
              simbol elegansi, identitas, serta kebanggaan budaya.
            </p>

            {/* Bullet List */}
            <div className="space-y-3">
              <p className="flex items-start gap-2 text-gray-700">
                <span className="text-[var(--prim-color)] font-bold">•</span>
                <span>
                  <strong>Keindahan Tradisi</strong> – Batik, ukiran kayu,
                  tenun, dan keramik mencerminkan filosofi serta nilai budaya
                  Nusantara.
                </span>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <span className="text-[var(--prim-color)] font-bold">•</span>
                <span>
                  <strong>Kualitas Premium</strong> – Dibuat dari bahan pilihan
                  dengan keterampilan tangan pengrajin lokal yang teruji.
                </span>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <span className="text-[var(--prim-color)] font-bold">•</span>
                <span>
                  <strong>Simbol Identitas</strong> – Setiap karya menghadirkan
                  spiritualitas, elegansi, dan kebanggaan bangsa.
                </span>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <span className="text-[var(--prim-color)] font-bold">•</span>
                <span>
                  <strong>Harmoni Modernitas</strong> – Menghubungkan warisan
                  leluhur dengan gaya hidup masa kini yang artistik dan elegan.
                </span>
              </p>
              <p className="flex items-start gap-2 text-gray-700">
                <span className="text-[var(--prim-color)] font-bold">•</span>
                <span>
                  <strong>Warisan Budaya</strong> – Setiap karya mencerminkan
                  filosofi dan tradisi leluhur Nusantara.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
