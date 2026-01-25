"use client";

import Image from "next/image";

import { StaticImageData } from "next/image";
import Deals from "../../Index/Deals/Deals";

import toast from "react-hot-toast";

interface ProductType {
    Id: string;
    image: string;
    title: string;
    price: string;
    lessprice: string;
    review: string;
    sold?: string;
    sale?: string;
}

interface Props {
    id?: string;
    products: ProductType[];
}


export default function ProductDetails({id, products}: Props) {
  return (
    <div>
      ProductDetails
    </div>
  )
}
