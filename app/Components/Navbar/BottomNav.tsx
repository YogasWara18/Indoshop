"use client";

import { useState } from "react";

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

  return <div></div>;
}
