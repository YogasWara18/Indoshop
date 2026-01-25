"use client";

import blogData from "@/app/JsonData/Blog.json";
import Link from "next/link";

const categories = [
  "Seni & Lukisan Tradisional",
  "Tenun & Batik",
  "Ukiran & Patung",
  "Kerajinan Pokok",
  "Dekorasi & Koleksi Eksklusif",
  "Perawatan Diri Tradisional",
  "Perlengkapan Rumah & Interior",
];

export default function Blogs() {
  return (
    <>
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#fdf6ec] py-5 border-b border-[var(--prim-color)] shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">Blog</h2>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl Unbounded text-gray-700 hover:text-[var(--prim-color)] transition-colors"
            >
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Blog
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[8%] lg:px-[12%] py-5 mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Blog List */}
          <div className="w-full lg:w-2/3 gap-5">
            {blogData.map((blog) => (
              <Link
                key={blog.id}
                href={{
                  pathname: "/UI-Components/Blogs/blogDetails",
                  query: { id: blog.id },
                }}
                className="flex flex-col gap-5 mb-10 cursor-pointer group"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-md shadow-lg border border-[var(--prim-color)]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>

                {/* Content */}
                <div className="mt-3 bg-[#fff8f0] border border-[#d9c2a3] rounded-lg p-5 shadow-md">
                  <span className="bg-[var(--prim-color)] text-white px-4 py-2 rounded-md text-lg Unbounded tracking-wide shadow-md">
                    {blog.tag}
                  </span>
                  <h2 className="text-3xl Unbounded mt-5 text-[var(--prim-color)] hover:text-[var(--sec-color)] hover:underline transition-colors">
                    {blog.title}
                  </h2>
                  <p className="mt-5 text-lg border-b pb-3 border-gray-300 text-gray-700">
                    {blog.pere}
                  </p>
                  <div className="flex mt-5 gap-5 text-sm text-gray-600">
                    <p>
                      <i className="bi bi-calendar2-week text-[var(--sec-color)] pr-1"></i>
                      {blog.date}
                    </p>
                    <p>
                      <i className="bi bi-chat-text text-[var(--sec-color)] pr-1"></i>
                      {blog.comment}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 gap-5 sticky top-22 left-0 h-[100%]">
            <div className="border-2 border-[var(--sec-color)] rounded-lg shadow-lg bg-[#fff8f0]">
              <div className="border-b border-[var(--sec-color)] p-5">
                <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
                  Recent post
                </h2>
              </div>
              <div className="p-5">
                {blogData.map((blog) => (
                  <Link
                    key={blog.id}
                    href={{
                      pathname: "/UI-Components/Blogs/blogDetails",
                      query: { id: blog.id },
                    }}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer group"
                  >
                    <div className="w-1/2 overflow-hidden rounded-md">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="w-1/2">
                      <h2 className="Unbounded text-lg hover:text-[var(--prim-color)] hover:underline transition-colors">
                        {blog.title}
                      </h2>
                      <div className="flex gap-5 mt-2 text-sm text-gray-600">
                        <p>
                          <i className="bi bi-calendar2-week text-[var(--prim-color)] pr-1"></i>
                          {blog.date}
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