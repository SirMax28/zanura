import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-zanura-blue)] text-[var(--color-zanura-white)] pt-20 pb-10 overflow-hidden relative">
      {/* Pattern decoration based on wireframe drops */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="flex repeat-x whitespace-nowrap h-24 items-end">
          {/* Decorative drops pattern (can be refined with actual assets) */}
          {[...Array(20)].map((_, i) => (
            <img
              key={i}
              src="/zanura/assets/isotipo_principal_gota.webp"
              alt=""
              className="h-16 mx-4 inline-block drop-shadow-lg"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 relative z-10">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-between space-y-12">
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4 font-semibold">
              Regístrate
            </h3>
            <form className="flex border-b border-[var(--color-zanura-white)] pb-2 max-w-sm">
              <input
                type="email"
                placeholder="TU CORREO ELECTRÓNICO"
                className="bg-transparent uppercase text-xs tracking-wider outline-none w-full placeholder:text-[var(--color-zanura-white)] placeholder:opacity-70"
              />
              <button
                type="submit"
                className="ml-4 hover:opacity-70 transition-opacity"
              >
                ➔
              </button>
            </form>
          </div>

          <div className="space-y-2 text-xs tracking-widest uppercase">
            <p>Sigue a @zanura</p>
            <div className="flex space-x-4 opacity-70">
              <a href="#" className="hover:opacity-100 transition-opacity">
                IG
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                TIKTOK
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                TWITTER
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-4 text-sm tracking-widest uppercase">
          <Link
            to="/acerca-de"
            className="hover:opacity-70 transition-opacity border-b border-transparent hover:border-[var(--color-zanura-white)] inline-flex w-max pb-1"
          >
            Acerca de
          </Link>
          <Link
            to="#"
            className="hover:opacity-70 transition-opacity border-b border-transparent hover:border-[var(--color-zanura-white)] inline-flex w-max pb-1"
          >
            Ingredientes
          </Link>
          <Link
            to="#"
            className="hover:opacity-70 transition-opacity border-b border-transparent hover:border-[var(--color-zanura-white)] inline-flex w-max pb-1"
          >
            Contacto
          </Link>
        </div>

        <div className="col-span-1 flex justify-end items-end pb-2">
          <img
            src="/zanura/assets/logo_principal_en_negro.webp"
            className="w-24"
            style={{ filter: "brightness(0) invert(1)" }}
            alt="Zanura"
          />
        </div>
      </div>
    </footer>
  );
}
