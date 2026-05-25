import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax para el fondo o el texto (se desplaza más lento que el scroll natural)
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const categories = [
    { title: 'Merch', image: '/zanura/assets/merchandising_1_bolsa.webp' },
    { title: 'Producto', image: '/zanura/assets/producto_1_botella_serum.webp' },
    { title: 'Pack', image: '/zanura/assets/packaging_1.webp' }
  ];

  const products = [
    { id: 1, name: 'SÉRUM RENOVADOR', rating: '★★★★★', price: '45€', image: '/zanura/assets/producto_1_botella_serum.webp' },
    { id: 2, name: 'ACEITE CORPORAL', rating: '★★★★☆', price: '38€', image: '/zanura/assets/complementario_2.webp' },
    { id: 3, name: 'PACK ESENCIAL', rating: '★★★★★', price: '80€', image: '/zanura/assets/packaging_1.webp' },
    { id: 4, name: 'BOLSA TOTE', rating: '★★★★★', price: '15€', image: '/zanura/assets/merchandising_1_bolsa.webp' },
    { id: 5, name: 'BÁLSAMO LABIAL', rating: '★★★★★', price: '18€', image: '/zanura/assets/complementario_3.webp' },
    { id: 6, name: 'ACEITE CAPILAR', rating: '★★★★☆', price: '35€', image: '/zanura/assets/complementario_4.webp' },
    { id: 7, name: 'GEL LIMPIADOR', rating: '★★★★★', price: '28€', image: '/zanura/assets/complementario_1_agua.webp' },
    { id: 8, name: 'BRUMA FACIAL', rating: '★★★★★', price: '25€', image: '/zanura/assets/producto_1_botella_serum.webp' },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col pt-24 font-sans text-zanura-black">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
        {/* Usamos el motion.div para el scroll vinculado al Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="flex flex-col items-center z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title text-zanura-blue flex flex-col mb-12"
          >
            <span>ACEITE DE OLIVA</span>
            <span className="italic">TÚ MEJOR VERSIÓN</span>
          </motion.h1>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="btn-primary"
            onClick={(e) => {
               document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Comprar
          </motion.button>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="w-full py-20 px-6 container mx-auto bg-zanura-beige relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full pt-[100%] relative mb-6 overflow-hidden bg-[var(--color-zanura-sand)]">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <button className="px-6 py-2 bg-[var(--color-zanura-blue)] text-white text-xs tracking-widest uppercase rounded-full group-hover:bg-[#111] transition-colors duration-300">
                {cat.title}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand History Breve */}
      <section className="w-full py-24 bg-white/50 text-center relative z-20">
        <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center">
          <h2 className="section-title mb-8 text-[var(--color-zanura-blue)] text-sm md:text-base tracking-[0.2em] font-sans font-medium uppercase">Estás en Zanura</h2>
          <p className="text-lg md:text-2xl font-serif text-center leading-relaxed text-gray-700 mb-12">
            "Creemos en el poder transformador de la naturaleza. Extraemos la esencia más pura para cuidar de ti, respetando el equilibrio y la simplicidad."
          </p>
          <img src="/zanura/assets/isotipo_principal_gota.webp" alt="Gota Zanura" className="w-12 opacity-80" />
        </div>
      </section>

      {/* Product Grid */}
      <section id="productos" className="w-full py-24 container mx-auto px-6 scroll-mt-20 relative z-20">
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
                <span className="text-xs uppercase tracking-widest font-semibold">{product.name}</span>
                <span className="text-[10px] text-gray-500 tracking-widest">{product.rating}</span>
                <span className="text-sm font-serif">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
