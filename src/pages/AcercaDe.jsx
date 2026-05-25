import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from '../components/Marquee';

export default function AcercaDe() {
  const { scrollY } = useScroll();
  // Parallax para la foto de fondo:
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl text-[var(--color-zanura-blue)] max-w-4xl leading-tight z-10 hero-title"
          style={{ y: textY, opacity: opacityHero }}
        >
          BELLEZA QUE PERDURA, <br />
          <span className="italic">ENTRE LA NATURALEZA Y LA CIENCIA</span>
        </motion.h1>
        
        {/* Foto cruzada en fondo con Parallax estricto */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0 w-full h-full -z-10 flex justify-center items-center pointer-events-none"
          style={{ y: bgY }}
        >
          <div className="w-3/4 md:w-1/2 aspect-video bg-[var(--color-zanura-sand)] opacity-30 mt-20 relative overflow-hidden">
             <img src="/src/assets/fondo_principal_textura_agua.webp" className="w-full h-full object-cover" alt="" />
          </div>
        </motion.div>
      </section>

      {/* Primer Bloque de Texto */}
      <section className="w-full py-20 px-6 container mx-auto relative z-20 bg-[var(--color-zanura-beige)]">
        <div className="max-w-2xl bg-transparent p-8 border-l border-[var(--color-zanura-blue)]">
          <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-700">
            Nacimos con una convicción clara: la verdadera belleza reside en nuestra esencia. 
            A través de un meticuloso proceso científico, perfeccionamos lo que la tierra nos da, 
            creando elixires que potencian tu naturalidad.
          </p>
        </div>
      </section>

      {/* Marquee Historia */}
      <section className="w-full py-6 bg-[var(--color-zanura-blue)] text-white relative z-20">
        <Marquee speed={25}>
          <span className="mx-8 font-serif text-2xl italic tracking-wide"> HISTORIA ➔</span>
        </Marquee>
      </section>

      {/* Segundo Bloque Narrativo asimétrico */}
      <section className="w-full py-24 px-6 container mx-auto relative z-20 bg-[var(--color-zanura-beige)]">
        <div className="max-w-3xl ml-auto bg-white/50 p-12 lg:p-20 relative z-10 shadow-sm">
          <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-700">
            Nuestro aceite de oliva, la base de Zanura, extrae las virtudes milenarias del mediterráneo. 
            Cultivado sosteniblemente, se convierte en oro líquido, diseñado para nutrir, reparar e iluminar tú piel diariamente.
          </p>
        </div>

        {/* Imágenes asimétricas inspiradas en el bosquejo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
            <img src="/src/assets/complementario_2.webp" alt="Proceso" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative md:mt-24">
            <img src="/src/assets/ingredientes_2.webp" alt="Naturaleza" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Ingredientes */}
      <section className="w-full py-24 relative z-20 bg-[var(--color-zanura-beige)] border-t border-[var(--color-zanura-sand)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title text-[var(--color-zanura-blue)] mb-16">Nuestros Ingredientes</h2>
          
          <div className="w-full aspect-video md:aspect-[21/9] bg-gray-200 mb-12 overflow-hidden relative">
            <img src="/src/assets/ingredientes_1.webp" alt="Fórmula principal" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-white font-serif text-3xl italic drop-shadow-md">Aceite Base</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col group cursor-default">
                <div className="w-full pt-[100%] bg-[var(--color-zanura-sand)] mb-4 overflow-hidden relative">
                  <img src={`/src/assets/complementario_${item}.webp`} alt={`Ingrediente ${item}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Ingrediente {item}</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[90%]">
                  Extracción prensada en frío para mantener sus propiedades intactas y máxima pureza.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
