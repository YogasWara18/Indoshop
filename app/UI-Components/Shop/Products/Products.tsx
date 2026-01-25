"use client";

import Image from "next/image";
import products from "@/app/JsonData/Recommend.json";

import Link from "next/link";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface product {
  Id: string;
  title: string;
  image: string;
  price: string;
  lessprice?: string;
  sale?: string;
  review?: string;
  sold?: number;
}


export default function Products() {
  const [price, setPrice] = useState(100);
  const [discount50, setDiscount50] = useState(false);
  const [discount30, setDiscount30] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    let result = products;

    result = result.filter((p) => {
      const productPrice = parseFloat(p.price.replace(/[^0-9.-]+/g, ""));
      return productPrice <= price;
    });

    if (discount50) {
      result = result.filter((p) => p.sale.includes("50%"));
    }
    if (discount30) {
      result = result.filter((p) => p.sale.includes("30%"));
    }

    if (isNew) {
      result = result.filter((p) => p.sale === "New");
    }
    setFilterProducts(result);
  }, [price, discount50, discount30, isNew]);

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} Ditambahkan ke keranjang!`, {
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

      toast.success(`${product.title} Ditambahkan ke keranjang!`);
    }
  };

  const handleAddToWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: any) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} Item seni ini telah masuk ke wishlist Anda!`, {
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

      toast.success(
        `${product.title} Item seni ini telah masuk ke wishlist Anda!`,
      );
    }
  };

 return (
  <div className="px-[8%] lg:px-[12%] py-10">
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        {/* Sidebar */}
        <div className="w-full md:w-1/2 lg:w-1/3 relative lg:sticky top-22 left-0 h-full">
          <div className="border border-gray-300 shadow rounded p-3">
            <div className="border-b w-full border-gray-300 pb-3 flex items-center justify-between">
              <h2 className="text-xl Unbounded">Product Category</h2>
              <button
                onClick={() => setFilterProducts(products)}
                className="border border-gray-300 px-2 py-1 rounded cursor-pointer hover:border-gray-500 transition-all duration-300"
              >
                Reset
              </button>
            </div>
            {/* Price Range */}
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Price Range</h3>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 text-sm font-medium">Rp0</span>
                <input
                  type="range"
                  min={0}
                  max={10000000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-[var(--prim-color)]"
                />
                <span className="text-gray-700 text-sm font-medium">
                  Rp{price}
                </span>
              </div>
            </div>
            {/* Discount */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Discount</h3>
              <form className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={discount50}
                    onChange={(e) => setDiscount50(e.target.checked)}
                    className="form-checkbox accent-[var(--prim-color)]"
                  />
                  <span>50% off</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={discount30}
                    onChange={(e) => setDiscount30(e.target.checked)}
                    className="form-checkbox accent-[var(--prim-color)]"
                  />
                  <span>30% off</span>
                </label>
              </form>
            </div>
            {/* Other */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Other</h3>
              <form className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNew}
                    onChange={(e) => setIsNew(e.target.checked)}
                    className="form-checkbox accent-[var(--prim-color)]"
                  />
                  <span>New Products</span>
                </label>
              </form>
            </div>
          </div>

          {/* Random Product */}
          <div className="mt-3">
            <div
              key={randomProduct.Id}
              className="product-wrap border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
            >
              <div className="relative flex justify-center items-center w-full h-56 bg-gray-50 rounded-lg">
                <Image
                  src={randomProduct.image}
                  alt={randomProduct.title}
                  width={200}
                  height={200}
                  className="object-contain max-h-full"
                />
                <div
                  onClick={() => handleAddToWishlist(randomProduct)}
                  className="absolute bottom-2 right-2"
                >
                  <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                </div>
                <span
                  className={`absolute off-product top-0 right-0 px-4 py-2 EB_Garamond text-xs font-bold text-white rounded ${
                    randomProduct.sale === "New"
                      ? "bg-yellow-400"
                      : randomProduct.sale?.includes("%")
                      ? "bg-red-500"
                      : "opacity-0"
                  }`}
                >
                  {randomProduct.sale}
                </span>
              </div>

              {/* Product Info */}
              <Link
                href={{
                  pathname: "/UI-Components/Shop",
                  query: { id: randomProduct.Id },
                }}
              >
                <div className="space-y-2 mt-3 product-info">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-[var(--prim-color)]">
                      {randomProduct.price}{" "}
                      <span className="text-gray-500 text-sm">/Pcs</span>
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      {randomProduct.lessprice}
                    </span>
                  </div>
                  <span className="flex items-center text-yellow-500 text-sm">
                    <i className="bi bi-star-fill me-1"></i>{" "}
                    {randomProduct.review}
                  </span>
                  <h2 className="text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                    {randomProduct.title}
                  </h2>
                  <h6 className="text-sm text-gray-600 flex items-center gap-1">
                    <i className="bi bi-shop text-[var(--prim-color)]"></i> By indoshop
                  </h6>
                  <h3 className="text-sm text-gray-500">
                    Sold: {randomProduct.sold}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {filterProducts.map((product) => (
            <div
              key={product.Id}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
            >
              <div className="relative flex justify-center items-center w-full h-56 bg-gray-50 rounded-lg">
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
                  className={`absolute off-product top-0 right-0 px-4 py-2 EB_Garamond text-xs font-bold text-white rounded ${
                    product.sale === "New"
                      ? "bg-yellow-400"
                      : product.sale?.includes("%")
                      ? "bg-red-500"
                      : "opacity-0"
                  }`}
                >
                  {product.sale}
                </span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
}