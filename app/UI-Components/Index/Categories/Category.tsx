"use client"

import Image from "next/image";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Category1 from "@/public/Category-1.png"
import Category2 from "@/public/Category-1.png"
import Category3 from "@/public/Category-1.png"
import Category4 from "@/public/Category-1.png"
import Category5 from "@/public/Category-1.png"
import Category6 from "@/public/Category-1.png"
import Category7 from "@/public/Category-1.png"
import Category8 from "@/public/Category-1.png"
import Category9 from "@/public/Category-1.png"

type CategoryType = {
  image: StaticImageData;
  title: string;
  products: string;
};

const categories: CategoryType[] = [
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
  { image: Category1, title: "Patung Bali", products: "125+ Products" },
];

export default function Category() {
  return (
    <div>
      Category
    </div>
  )
}
