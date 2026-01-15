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
      { label: "Shop Details", href: "" },
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
      { label: "Blog Details", href: "" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/contact" },
];

export default function BottomNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const [isFixed, setIsFixed] = useState(false);

    const toggleDropdown = (label: string) => {
      setOpenDropdowns((prev) => ({...prev ,[label]: !prev[label] }))
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsFixed(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className={`w-full bg-white shadow-sm transition-all duration-500 ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""}`}>
      <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
        {/* Desktop Nav */}
      <Link
        href="/"
        className={`text-3xl font-bold EB_Garamond text-black hidden ${isFixed ? "lg-flex" : 'hidden' }`}>
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
                  {link.dropdown.map((item) => 
                    item.label === "Shop Details" ? (
                      <Link
                        key={item.label}
                        href={{
                          pathname: "/UI-Components/Shop",
                          query: {}
                        }}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all "
                      >
                        {item.label}
                      </Link>
                    ) : item.label === "Blog Details" ? (
                      <Link
                        key={item.label}
                        href={{
                          pathname: "/UI-Components/Shop",
                          query: {}
                        }}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition-all "
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:bg-[var(--prim-light)] transition"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
      </nav>
      </div>
    </div>
  );
}
