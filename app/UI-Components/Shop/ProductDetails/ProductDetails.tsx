"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";

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
              Setiap karya seni Indonesia adalah cerminan kekayaan budaya dan
              warisan leluhur yang tak ternilai. Dari ukiran kayu yang penuh
              detail, batik dengan motif filosofis, hingga kerajinan tangan yang
              sarat makna, setiap produk menghadirkan harmoni antara tradisi dan
              keindahan. Dibuat dengan tangan terampil para pengrajin, karya ini
              bukan sekadar benda dekoratif, melainkan simbol spiritualitas,
              keanggunan, dan identitas bangsa.
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
      </div>
    </>
  );
}
