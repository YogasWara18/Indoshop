"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import blogData from "@/app/JsonData/Blog.json";

export default function BlogDetailsClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const blog = blogData.find((b) => String(b.id) === String(id));

  if (!id) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-600 mb-4">ID blog tidak ditemukan di URL.</p>
        <p>Contoh URL: <code>/UI-Components/Blogs/blogDetails?id=1</code></p>
        <div className="mt-4">
          <Link href="/UI-Components/Blogs" className="text-blue-600 underline">
            Kembali ke daftar blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div className="p-10 text-center text-red-600">No Blog Found for id: {id}</div>;
  }

  return (
    <>
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#fdf6ec] py-5 border-b border-[var(--prim-color)] shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
            Blog Details :
            <span className="text-xl font-normal hidden lg:inline ps-2">{blog.title}</span>
          </h2>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl Unbounded text-gray-700 hover:text-[var(--prim-color)] transition-colors"
            >
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">&nbsp; Blog Details</h2>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="px-[8%] lg:px-[12%] py-10 bg-[#fff8f0]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* Image */}
            <div className="overflow-hidden rounded-lg shadow-lg border border-[var(--prim-color)]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>

            {/* Tag & Meta */}
            <div className="flex flex-wrap items-center gap-5">
              <span className="bg-[var(--prim-color)] text-white px-4 py-2 rounded-md text-lg Unbounded shadow-md">
                {blog.tag}
              </span>
              <p className="text-gray-600 text-sm flex items-center">
                <i className="bi bi-calendar2-week text-[var(--sec-color)] pr-1"></i>
                {blog.date}
              </p>
              <p className="text-gray-600 text-sm flex items-center">
                <i className="bi bi-chat-text text-[var(--sec-color)] pr-1"></i>
                {blog.comment}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-4xl Unbounded text-[var(--prim-color)] font-bold">
              {blog.title}
            </h1>

            {/* Paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>{blog.pere}</p>
              <p>{blog.pere2}</p>
              <p>{blog.pere3}</p>
            </div>

            {/* Back Button */}
            <div>
              <Link
                href="/UI-Components/Blogs"
                className="inline-block Unbounded text-lg 
                           bg-[var(--prim-color)] text-white 
                           px-6 py-3 rounded-md shadow-md 
                           hover:bg-[var(--sec-color)] hover:text-black 
                           transition-all duration-300 ease-in-out
                           tracking-wide"
              >
                ← Kembali ke Blog
              </Link>
            </div>
          </div>

          {/* Sidebar Recent Post */}
          <div className="w-full lg:w-1/3 gap-5 sticky top-22 left-0 h-fit">
            <div className="border-2 border-[var(--sec-color)] rounded-lg shadow-lg bg-[#fff8f0]">
              <div className="border-b border-[var(--sec-color)] p-5">
                <h2 className="Unbounded text-2xl text-[var(--prim-color)]">Recent Post</h2>
              </div>
              <div className="p-5">
                {blogData.slice(0, 4).map((recent) => (
                  <Link
                    key={recent.id}
                    href={`/UI-Components/Blogs/blogDetails?id=${recent.id}`}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer group"
                  >
                    <div className="w-1/2 overflow-hidden rounded-md">
                      <img
                        src={recent.image}
                        alt={recent.title}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="w-1/2">
                      <h2 className="Unbounded text-lg hover:text-[var(--prim-color)] hover:underline transition-colors">
                        {recent.title}
                      </h2>
                      <div className="flex gap-5 mt-2 text-sm text-gray-600">
                        <p>
                          <i className="bi bi-calendar2-week text-[var(--prim-color)] pr-1"></i>
                          {recent.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}