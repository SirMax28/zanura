import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";
import ViewportVideo from "../components/ViewportVideo";
import { useCart } from "../context/CartContext";

const categories = [
  {
    title: "Producto",
    image: "/zanura/assets/Producto.webp",
    alt: "Los cuatro productos de cosmética ZANURA",
  },
  {
    title: "Pack",
    image: "/zanura/assets/pack.webp",
    alt: "Caja completa del pack ZANURA",
  },
  {
    title: "Merch",
    image: "/zanura/assets/merch.webp",
    alt: "Tote bag azul de ZANURA en un espacio mediterráneo",
  },
];

const products = [
  {
    id: 1,
    name: "Sérum regenerador",
    price: "22 €",
    priceValue: 22,
    image: "/zanura/assets/serum_regenerador.webp",
    description:
      "Sérum facial de textura ligera pensado para acompañar el cuidado diario y dejar una sensación de piel suave, fresca y confortable.",
  },
  {
    id: 2,
    name: "Aceite corporal",
    price: "20 €",
    priceValue: 20,
    image: "/zanura/assets/aceite_corporal.webp",
    description:
      "Aceite corporal de aplicación sensorial que ayuda a mantener la piel nutrida y flexible, con un acabado suave y luminoso.",
  },
  {
    id: 3,
    name: "Bálsamo labial",
    price: "8 €",
    priceValue: 8,
    image: "/zanura/assets/balsamo_labial.webp",
    description:
      "Bálsamo de uso cotidiano que aporta confort a los labios y los protege de la sensación de sequedad con una textura agradable.",
  },
  {
    id: 4,
    name: "Crema facial hidratante",
    price: "18 €",
    priceValue: 18,
    image: "/zanura/assets/crema_hidratante.webp",
    description:
      "Crema facial hidratante para una rutina sencilla de mañana o noche, formulada para aportar suavidad y una sensación duradera de bienestar.",
  },
  {
    id: 5,
    name: "Totebag",
    price: "8 €",
    priceValue: 8,
    image: "/zanura/assets/tote_bag.webp",
    description:
      "Bolsa de tela ZANURA amplia y ligera, diseñada para acompañar la rutina diaria y llevar tus esenciales con comodidad.",
  },
  {
    id: 6,
    name: "Pack rodillo de jade + gua sha",
    price: "13,99 €",
    priceValue: 13.99,
    image: "/zanura/assets/rodillo_de_jace_mas_gua_sha.webp",
    description:
      "Dúo de masaje facial para incorporar movimientos suaves y pausados al ritual de cuidado, favoreciendo un momento de calma.",
  },
  {
    id: 7,
    name: "Albornoz",
    price: "20 €",
    priceValue: 20,
    image: "/zanura/assets/albornoz.webp",
    description:
      "Albornoz suave y envolvente pensado para prolongar la sensación de confort después del baño y convertir la rutina en un ritual.",
  },
  {
    id: 8,
    name: "Vela aromática",
    price: "3 €",
    priceValue: 3,
    image: "/zanura/assets/vela_aromatica.webp",
    description:
      "Vela aromática para crear una atmósfera cálida y serena durante los momentos de cuidado, descanso o desconexión.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 220]);
  const heroOpacity = useTransform(scrollY, [0, 460], [1, 0]);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  return (
    <div className="relative w-full bg-[var(--color-zanura-beige)] font-sans text-zanura-black">
      <section className="sticky top-0 z-10 flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-zanura-sand bg-[var(--color-zanura-blue)] px-6 text-center">
        <ViewportVideo
          className="absolute inset-0 h-full w-full object-cover"
          pauseAfterVh={0.7}
          src="/zanura/assets/PANTALLA_INICIAL.webm"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,37,0.2),rgba(4,18,37,0.08)_48%,rgba(4,18,37,0.32))]" />

        <motion.div
          className="relative z-10 flex max-w-5xl flex-col items-center pt-24 text-[var(--color-zanura-beige)]"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.img
            alt="ZANURA"
            animate={{ opacity: 1, y: 0 }}
            className="h-auto w-[min(78vw,44rem)] drop-shadow-[0_10px_34px_rgba(4,18,37,0.28)]"
            initial={{ opacity: 0, y: 24 }}
            src="/zanura/assets/zanura.webp"
            transition={{ duration: 0.9, delay: 0.15 }}
          />
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-xl font-serif text-xl leading-snug drop-shadow-[0_5px_20px_rgba(4,18,37,0.45)] md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            El cuidado empieza cuando todo se calma.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative z-20 flex min-h-screen w-full items-center bg-[var(--color-zanura-sand)] px-6 py-28 shadow-2xl shadow-black/10 md:sticky md:top-0 md:overflow-hidden">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {categories.map((category, index) => (
            <motion.article
              className="group flex flex-col items-center"
              initial={{ opacity: 0, y: 36 }}
              key={category.title}
              transition={{ duration: 0.75, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden bg-[var(--color-zanura-beige)] shadow-[0_18px_45px_rgba(26,26,26,0.08)]">
                <img
                  alt={category.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                  src={category.image}
                />
              </div>
              <span className="rounded-full bg-[var(--color-zanura-blue)] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                {category.title}
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sticky top-0 z-30 flex min-h-screen w-full items-center bg-[var(--color-zanura-beige)] px-6 py-28 text-center shadow-2xl shadow-black/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <p className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.2] text-[var(--color-zanura-blue)] [font-variant-ligatures:none] [font-feature-settings:'liga'_0,'dlig'_0]">
            ZANURA nace para transformar la rutina diaria en un gesto de calma.
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 md:text-lg">
            Una cosmética natural inspirada en el agua, la luz y la pureza de
            los ingredientes, pensada para cuidar la piel desde la sencillez,
            la frescura y el bienestar.
          </p>
          <img
            alt=""
            aria-hidden="true"
            className="mt-12 w-11 opacity-75"
            src="/zanura/assets/isotipo_principal_gota.webp"
          />
        </div>
      </section>

      <section
        className="relative z-40 min-h-screen w-full border-t border-[var(--color-zanura-sand)] bg-[var(--color-zanura-beige)] pb-24 pt-32 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]"
        id="productos"
      >
        <div className="container mx-auto px-6">
          <div className="mb-14 flex items-end justify-between border-b border-black/15 pb-5">
            <h2 className="font-serif text-4xl text-[var(--color-zanura-blue)] md:text-6xl">
              Tienda
            </h2>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-black/50">
              Cosmética y ritual
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-7 md:gap-y-20">
            {products.map((product, index) => (
              <motion.article
                className="group flex cursor-pointer flex-col"
                initial={{ opacity: 0, y: 24 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden bg-[var(--color-zanura-sand)]">
                  <img
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    src={product.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      className="w-full bg-[var(--color-zanura-beige)] py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-zanura-black)] transition-colors hover:bg-[var(--color-zanura-blue)] hover:text-white"
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart(product);
                      }}
                      type="button"
                    >
                      Añadir · {product.price}
                    </button>
                  </div>
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em]">
                  {product.name}
                </h3>
                <p className="mt-2 font-serif text-base">{product.price}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {createPortal(
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
            <motion.button
              animate={{ opacity: 1 }}
              aria-label="Cerrar vista del producto"
              className="absolute inset-0 bg-[var(--color-zanura-black)]/45 backdrop-blur-sm"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              type="button"
            />

            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              aria-labelledby="product-preview-title"
              aria-modal="true"
              className="relative z-10 grid max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-[var(--color-zanura-beige)] shadow-2xl md:grid-cols-[1.15fr_0.85fr]"
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              role="dialog"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Cerrar vista del producto"
                className="absolute right-4 top-4 z-20 rounded-full bg-[var(--color-zanura-beige)]/90 p-2.5 text-[var(--color-zanura-blue)] shadow-md transition-transform hover:rotate-90"
                onClick={() => setSelectedProduct(null)}
                type="button"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              <div className="min-h-72 bg-[var(--color-zanura-sand)] md:min-h-[36rem]">
                <img
                  alt={selectedProduct.name}
                  className="h-full max-h-[56vh] w-full object-cover md:max-h-none"
                  src={selectedProduct.image}
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="mb-5 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-zanura-blue)]/65">
                  Cosmética y ritual
                </p>
                <h2
                  className="font-serif text-4xl leading-tight text-[var(--color-zanura-blue)] md:text-5xl"
                  id="product-preview-title"
                >
                  {selectedProduct.name}
                </h2>
                <p className="mt-5 font-serif text-2xl">
                  {selectedProduct.price}
                </p>
                <p className="mt-8 max-w-sm text-sm leading-7 text-black/60">
                  {selectedProduct.description}
                </p>
                <button
                  className="btn-primary mt-10 w-full"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  type="button"
                >
                  Añadir al carrito · {selectedProduct.price}
                </button>
              </div>
            </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}
