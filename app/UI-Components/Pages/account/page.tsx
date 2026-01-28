import Link from "next/link";

export default function Account() {
  return (
    <>
      {/* Header Breadcrumb */}
      <div className="px-[8%] lg:px-[12%] bg-[#fdf6ec] py-5 border-b border-[var(--prim-color)] shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl text-[var(--prim-color)]">Account</h2>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl Unbounded text-gray-700 hover:text-[var(--prim-color)] transition-colors"
            >
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Account
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Login */}
          <div className="w-full lg:w-1/2 border border-gray-200 px-6 py-8 rounded-lg 
                          bg-gradient-to-br from-white to-[#fdf6ec] shadow-lg hover:shadow-xl transition-all">
            <h2 className="Unbounded text-xl mb-6 text-[var(--prim-color)] flex items-center gap-2">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 focus-within:border-[var(--prim-color)] transition-all">
                  <i className="bi bi-envelope text-gray-400 mr-2"></i>
                  <input
                    type="email"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Masukkan email aktif"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Gunakan email terdaftar untuk login.</p>
              </div>
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Password</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 focus-within:border-[var(--prim-color)] transition-all">
                  <i className="bi bi-lock text-gray-400 mr-2"></i>
                  <input
                    type="password"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Masukkan password"
                  />
                </div>
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
                Login
              </button>
            </form>
          </div>

          {/* Register */}
          <div className="w-full lg:w-1/2 border border-gray-200 px-6 py-8 rounded-lg 
                          bg-gradient-to-br from-white to-[#fdf6ec] shadow-lg hover:shadow-xl transition-all">
            <h2 className="Unbounded text-xl mb-6 text-[var(--prim-color)] flex items-center gap-2">
              <i className="bi bi-person-plus"></i> Register
            </h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Full Name</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 focus-within:border-[var(--prim-color)] transition-all">
                  <i className="bi bi-person text-gray-400 mr-2"></i>
                  <input
                    type="text"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 focus-within:border-[var(--prim-color)] transition-all">
                  <i className="bi bi-envelope text-gray-400 mr-2"></i>
                  <input
                    type="email"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Masukkan email aktif"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Pastikan email valid untuk verifikasi akun.</p>
              </div>
              <div className="flex flex-col">
                <label className="Unbounded mb-2 text-gray-700">Password</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 focus-within:border-[var(--prim-color)] transition-all">
                  <i className="bi bi-lock text-gray-400 mr-2"></i>
                  <input
                    type="password"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Buat password"
                  />
                </div>
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}