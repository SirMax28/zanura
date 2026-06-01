import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax para el fondo o el texto (se desplaza más lento que el scroll natural)
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const categories = [
    { title: "Merch", image: "/zanura/assets/merchandising_1_bolsa.webp" },
    {
      title: "Producto",
      image: "/zanura/assets/producto_1_botella_serum.webp",
    },
    { title: "Pack", image: "/zanura/assets/packaging_1.webp" },
  ];

  const products = [
    {
      id: 1,
      name: "SÉRUM RENOVADOR",
      rating: "★★★★★",
      price: "45€",
      image: "/zanura/assets/producto_1_botella_serum.webp",
    },
    {
      id: 2,
      name: "ACEITE CORPORAL",
      rating: "★★★★☆",
      price: "38€",
      image: "/zanura/assets/complementario_2.webp",
    },
    {
      id: 3,
      name: "PACK ESENCIAL",
      rating: "★★★★★",
      price: "80€",
      image: "/zanura/assets/packaging_1.webp",
    },
    {
      id: 4,
      name: "BOLSA TOTE",
      rating: "★★★★★",
      price: "15€",
      image: "/zanura/assets/merchandising_1_bolsa.webp",
    },
    {
      id: 5,
      name: "BÁLSAMO LABIAL",
      rating: "★★★★★",
      price: "18€",
      image: "/zanura/assets/complementario_3.webp",
    },
    {
      id: 6,
      name: "ACEITE CAPILAR",
      rating: "★★★★☆",
      price: "35€",
      image: "/zanura/assets/complementario_4.webp",
    },
    {
      id: 7,
      name: "GEL LIMPIADOR",
      rating: "★★★★★",
      price: "28€",
      image: "/zanura/assets/complementario_1_agua.webp",
    },
    {
      id: 8,
      name: "BRUMA FACIAL",
      rating: "★★★★★",
      price: "25€",
      image: "/zanura/assets/producto_1_botella_serum.webp",
    },
  ];

  return (
    <div className="w-full relative font-sans text-zanura-black bg-[var(--color-zanura-beige)]">
      {/* Hero Section */}
      <section className="w-full h-screen sticky top-0 flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-[var(--color-zanura-beige)] border-b border-zanura-sand z-10">
        {/* Usamos el motion.div para el scroll vinculado al Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="flex flex-col items-center z-10 pt-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title text-zanura-blue flex flex-col mb-12"
          >
            <span>ORO LÍQUIDO</span>
            <span className="italic">TU VERDADERA ESENCIA</span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="btn-primary"
            onClick={(e) => {
              document
                .getElementById("productos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Comprar
          </motion.button>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="w-full h-screen sticky top-0 flex flex-col justify-center px-6 bg-[var(--color-zanura-sand)] z-20 shadow-2xl shadow-black/10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-[90rem] mx-auto w-full pt-10 group/list">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center group/card cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:!blur-none hover:!opacity-100 group-hover/list:blur-[3px] group-hover/list:opacity-50 relative z-0 hover:!z-20 hover:-translate-y-2"
            >
              <div className="w-full pt-[100%] md:pt-[130%] relative mb-8 overflow-hidden bg-[var(--color-zanura-sand)] shadow-md transition-all duration-700 group-hover/card:shadow-2xl z-10">
                {/* Expansión extrema de la imagen (-top-1) para anular definitivamente el subpixel de navegador y las líneas blancas */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute -top-[2px] -left-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] max-w-none object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/card:scale-110 pointer-events-none"
                />

                {/* Efecto de Refracción / Prisma de Cristal Suave */}
                <div className="absolute inset-0 z-20 pointer-events-none transform -translate-x-[150%] -skew-x-12 group-hover/card:translate-x-[200%] transition-transform duration-[2s] ease-in-out w-[150%]">
                  <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[4px]"></div>
                </div>

                {/* Resplandor Azul sutil exclusivo en los bordes internos (Viñeta) */}
                <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-700 opacity-0 group-hover/card:opacity-100 shadow-[inset_0_0_80px_rgba(10,60,125,0.5)]"></div>
              </div>

              <button className="px-8 py-3 bg-[var(--color-zanura-blue)] text-white text-xs tracking-[0.2em] font-medium uppercase rounded-full group-hover/card:bg-[#111] transition-all duration-500 transform group-hover/card:scale-110 group-hover/card:shadow-lg">
                {cat.title}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand History Breve */}
      <section className="w-full h-screen sticky top-0 flex flex-col justify-center bg-white text-center z-30 shadow-2xl shadow-black/10">
        <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center pt-20">
          <h2 className="section-title mb-8 text-[var(--color-zanura-blue)] text-sm md:text-base tracking-[0.2em] font-sans font-medium uppercase">
            Estás en Zanura
          </h2>
          <p className="text-lg md:text-3xl font-serif text-center leading-relaxed text-gray-700 mb-12">
            "Creemos en el poder transformador de la naturaleza. Extraemos la
            esencia más pura para cuidar de ti, respetando el equilibrio y la
            simplicidad."
          </p>
          <img
            src="/zanura/assets/isotipo_principal_gota.webp"
            alt="Gota Zanura"
            className="w-12 opacity-80"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section
        id="productos"
        className="w-full min-h-screen relative z-40 bg-[var(--color-zanura-beige)] border-t border-[var(--color-zanura-sand)] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] pt-32 pb-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full pt-[125%] relative bg-[var(--color-zanura-sand)] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Profesionalismo: Botón Añadir Rápido invisible por defecto */}
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                    <button className="w-full bg-zanura-beige text-zanura-black py-3 text-xs tracking-widest font-semibold uppercase hover:bg-zanura-blue hover:text-white transition-colors duration-300">
                      Añadir - {product.price}
                    </button>
                  </div>
                  {/* Degradado oscuro para legibilidad si la imagen es clara */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <div className="flex flex-col space-y-1 px-1">
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    {product.name}
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-widest">
                    {product.rating}
                  </span>
                  <span className="text-sm font-serif">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
