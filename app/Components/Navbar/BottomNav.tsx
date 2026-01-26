"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Shop Details", href: "/UI-Components/Shop?id=Recommend1" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Cart", href: "/UI-Components/Pages/cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/checkout" },
      { label: "Account", href: "/UI-Components/Pages/account" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/blogDetails?id=1" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/contact" },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

     const uniqueCart = new Set(cart.map((item: unknown) => (item as { id: string }).id));
      const uniqueWishlist = new Set(wishlist.map((item: unknown) => (item as { id: string }).id));

      setCartCount(uniqueCart.size);
      setWishlistCount(uniqueWishlist.size);
    };

    loadCounts();
    window.addEventListener("storageUpdate", loadCounts);
    return () => window.removeEventListener("storageUpdate", loadCounts);
  }, []);

  return (
    <div
      className={`w-full bg-white shadow-sm transition-all duration-500 ${
        isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""
      }`}
    >
      <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
        {/* Desktop Nav */}
        <Link
          href="/"
          className={`text-3xl font-bold EB_Garamond text-black hidden ${
            isFixed ? "lg:flex" : "hidden"
          }`}
        >
          Indo<span className="text-[var(--prim-color)]">shop</span>
        </Link>

        <nav className="hidden lg:flex space-x-6 menu-link relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-[99999]">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label} <i className="ri-arrow-down-s-line"></i>
                </Link>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3 hidden lg:flex">
          <i className="bi bi-telephone pe-2 text-xl"></i> +628 1234 5678
        </button>

        {/* Mobile Nav Header */}
        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <div className="flex items-center gap-x-5">
              <i className="ri-menu-line"></i>
            </div>
          </button>
          <div className="flex lg:hidden items-center space-x-6">
            {/* Wishlist */}
            <button className="relative cursor-pointer">
              <Link href="/UI-Components/Pages/wishlist">
                <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </button>
            {/* Cart */}
            <button className="relative cursor-pointer">
              <Link href="/UI-Components/Pages/cart">
                <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </button>
          </div>
          <button className="nav-button cursor-pointer font-bold bg-[var(--prim-color)] text-white p-3">
            <i className="bi bi-telephone pe-2 text-xl"></i> +628 1234 5678
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500">
          <nav className="flex flex-col px-[4%] py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    className="flex justify-between items-center w-full px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${
                        openDropdowns[link.label] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openDropdowns[link.label] ? "max-h-60 mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col bg-[var(--prim-light)] p-2 space-y-1 rounded-md">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="px-2 py-1 bg-white rounded-md hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
