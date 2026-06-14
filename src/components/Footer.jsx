import { Link } from "react-router-dom";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.4" />
    <path d="M17.4 6.9h.01" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M20 7.2c-.6.3-1.3.5-2 .6a3.45 3.45 0 0 0-5.95 3.15A9.78 9.78 0 0 1 4.9 7.3a3.43 3.43 0 0 0 1.07 4.6c-.55-.02-1.08-.17-1.54-.43v.04a3.45 3.45 0 0 0 2.76 3.38c-.5.14-1 .16-1.52.06a3.45 3.45 0 0 0 3.22 2.39A6.9 6.9 0 0 1 4 18.7a9.74 9.74 0 0 0 5.28 1.55c6.33 0 9.8-5.24 9.8-9.79v-.45c.67-.49 1.25-1.1 1.72-1.8Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const SendArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-zanura-blue)] pt-14 pb-6 text-[var(--color-zanura-sand)] border-t border-[var(--color-zanura-sand)]/35 md:pt-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-[var(--color-zanura-sand)]/55" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-[0.92]"
        style={{
          backgroundImage: "url('/zanura/assets/final_web.webp')",
          backgroundPosition: "center top",
          backgroundSize: "400px auto",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(235,229,223,0.05),transparent_28%),linear-gradient(180deg,rgba(4,18,37,0.04),rgba(4,18,37,0.01)_45%,rgba(4,18,37,0.08))]" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-[1.2fr_0.65fr_0.95fr] lg:gap-14">
        <div className="flex flex-col justify-between gap-9">
          <div>
            <h3 className="mb-4 text-[0.64rem] font-medium uppercase tracking-[0.32em] text-[var(--color-zanura-sand)]/82">
              Descubre Nuestro Universo
            </h3>
            <p className="mb-5 max-w-sm font-serif text-base leading-relaxed text-[var(--color-zanura-sand)]/68">
              Únete y recibe en exclusiva los secretos de nuestra botánica.
            </p>
            <form className="flex max-w-[23rem] items-center rounded-full border border-[var(--color-zanura-sand)]/44 bg-[rgba(4,18,37,0.28)] p-1 pl-5 shadow-[inset_0_2px_12px_rgba(0,0,0,0.34),inset_0_-1px_0_rgba(235,229,223,0.08),0_12px_36px_rgba(0,0,0,0.16)] backdrop-blur-[1px] transition-colors duration-300 hover:border-[var(--color-zanura-sand)]/68 focus-within:border-[var(--color-zanura-sand)]/90">
              <input
                type="email"
                placeholder="TU CORREO ELECTRÓNICO"
                aria-label="Tu correo electrónico"
                className="w-full bg-transparent text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-zanura-sand)] outline-none placeholder:text-[var(--color-zanura-sand)]/44"
              />
              <button
                type="submit"
                aria-label="Enviar correo"
                className="rounded-full bg-[var(--color-zanura-sand)] p-2.5 text-[var(--color-zanura-blue)] shadow-[0_7px_18px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4efe8] focus-visible:outline-[var(--color-zanura-sand)]"
              >
                <SendArrow />
              </button>
            </form>
          </div>

          <div className="space-y-3">
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-[var(--color-zanura-sand)]/52">Comunidad</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <a href="#" className="inline-flex items-center gap-3 text-[var(--color-zanura-sand)]/70 transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-zanura-sand)]">
                <InstagramIcon />
                <span className="text-xs tracking-[0.22em]">IG</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 text-[var(--color-zanura-sand)]/70 transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-zanura-sand)]">
                <TikTokIcon />
                <span className="text-xs tracking-[0.22em]">TIKTOK</span>
              </a>
              <a href="#" className="inline-flex items-center gap-3 text-[var(--color-zanura-sand)]/70 transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-zanura-sand)]">
                <TwitterIcon />
                <span className="text-xs tracking-[0.22em]">TWITTER</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="flex flex-col space-y-4 pt-1" aria-label="Footer">
          {["Acerca de", "Colecciones", "Ingredientes", "Contacto"].map((link) => (
            <Link
              key={link}
              to={link === "Acerca de" ? "/acerca-de" : "#"}
              className="group relative inline-flex w-max text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-zanura-sand)]/70 transition-colors hover:text-[var(--color-zanura-sand)]"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-zanura-sand)] transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="relative flex min-h-44 items-center justify-center pt-2 md:min-h-52">
          <img
            alt="Zanura Cosmética Natural"
            className="relative z-10 w-44 drop-shadow-2xl lg:w-56"
            src="/zanura/assets/logo_principal_en_negro.webp"
            style={{
              filter:
                "brightness(0) invert(93%) sepia(9%) saturate(380%) hue-rotate(332deg)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full text-center md:mt-12">
        <p className="px-6 text-[0.55rem] font-medium uppercase tracking-[0.28em] text-[var(--color-zanura-sand)]/45">
          © 2026 ZANURA. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
