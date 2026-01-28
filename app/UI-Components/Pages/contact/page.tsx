import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Header Breadcrumb */}
      <div className="px-[8%] lg:px-[12%] bg-[#fdf6ec] py-5 border-b border-[var(--prim-color)] shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
            Contact
          </h2>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl Unbounded text-gray-700 hover:text-[var(--prim-color)] transition-colors"
            >
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Contact
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[8%] lg:px-[12%] py-10 mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 bg-[#fff8f0] border border-[#d9c2a3] rounded-lg p-6 shadow-md space-y-6">
            <h3 className="Unbounded text-2xl text-[var(--prim-color)] mb-4">
              Hubungi Kami
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kami hadir untuk mendukung seni dan kerajinan Indonesia. Silakan
              hubungi kami melalui informasi berikut:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="bi bi-geo-alt text-[var(--prim-color)] text-xl"></i>
                <span className="text-gray-700">
                  Jl. Melati No. 789,Taman Budaya, Jakarta
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-telephone text-[var(--prim-color)] text-xl"></i>
                <span className="text-gray-700">
                  +62 812 3456 78 / +62 813 9876 4012
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-envelope text-[var(--prim-color)] text-xl"></i>
                <span className="text-gray-700">info@indoshop-art.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="text-[var(--prim-color)] hover:text-[var(--prim-dark)] transition"
              >
                <i className="bi bi-facebook text-2xl"></i>
              </Link>
              <Link
                href="#"
                className="text-[var(--prim-color)] hover:text-[var(--prim-dark)] transition"
              >
                <i className="bi bi-instagram text-2xl"></i>
              </Link>
              <Link
                href="#"
                className="text-[var(--prim-color)] hover:text-[var(--prim-dark)] transition"
              >
                <i className="bi bi-twitter text-2xl"></i>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#fff8f0] border border-[#d9c2a3] rounded-lg p-6 shadow-md">
            <h3 className="Unbounded text-2xl text-[var(--prim-color)] mb-4">
              Kirim Pesan
            </h3>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[var(--prim-color)]"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[var(--prim-color)]"
                  placeholder="Masukkan email aktif"
                />
              </div>
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Pesan</label>
                <textarea
                  rows={4}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[var(--prim-color)]"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="EB_Garamond w-full lg:w-auto px-6 py-3 mt-3 font-semibold 
                   text-white text-[var(--white-color)] bg-[var(--prim-color)] 
                   shadow-[0_0_15px_var(--prim-light)] 
                   hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] 
                   hover:shadow-[0_0_25px_var(--prim-light)] 
                   transition-all duration-[var(--transition-regular)] 
                   cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 
                   text-sm rounded-md flex items-center justify-center gap-2"
              >
                <i className="bi bi-send"></i> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
