import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-[8%] lg:px-[12%] py-3 bg-gray-100 text-gray-600 border-t border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        
        {/* Logo */}
        <a href="/" className="-mb-10 hover:scale-105 transition-transform duration-300">
          <img
            src="/logo.png"
            alt="Indoshop Art Market"
            width={200}
            height={80}
            className="object-contain drop-shadow-md hover:drop-shadow-xl transition-all duration-300"
          />
        </a>

        {/* Social Media */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/YogasWara18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--prim-color)] hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/t-kurnia-yogas-wara-604b64338/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--prim-color)] hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=teukukurniayogaswara@gmail.com"
            className="hover:text-[var(--prim-color)] hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/+6281234701212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--prim-color)] hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-400 w-[300px] flex items-center transition-all duration-300 hover:border-[var(--prim-color)] cursor-pointer"></div>

        {/* Copyright */}
        <p className="text-sm mt-1 text-center">
          © {new Date().getFullYear()} <strong>Indoshop Art Market</strong>. Semua Hak Dilindungi.{" "}
          <a
            href="https://www.linkedin.com/in/t-kurnia-yogas-wara-604b64338/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 text-gray-800 font-semibold text-md hover:text-[var(--prim-color)] hover:scale-105"
          >
            T. Kurnia Yogas Wara
          </a>
        </p>
      </div>
    </footer>
  );
}