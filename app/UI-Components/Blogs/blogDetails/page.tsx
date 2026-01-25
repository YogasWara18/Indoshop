"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import blogData from "@/app/JsonData/Blog.json";


export default function BlogDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const blog = blogData.find((b) => b.id.toString() === id);

    if(!blog) return <div>No Blog Found</div>

  return (
    <div>
      Page
    </div>
  )
}
