import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ViewportVideo from "../components/ViewportVideo";

const ingredients = [
  {
    name: "Jojoba Seed Oil",
    image: "/zanura/assets/jajo0ba.webp",
    alt: "Semillas y aceite de jojoba",
    description:
      "Aporta equilibrio y suavidad a la piel. Su textura ligera ayuda a mantener la hidratación sin sensación pesada, dejando un acabado sedoso y confortable.",
  },
  {
    name: "Rosa Damascena",
    image: "/zanura/assets/rosa.webp",
    alt: "Rosa Damascena",
    description:
      "Aporta una experiencia sensorial delicada y floral. Su presencia refuerza la sensación de calma, suavidad y cuidado, convirtiendo la aplicación en un gesto más relajante.",
  },
  {
    name: "Tocopherol",
    image: "/zanura/assets/tocopherol.webp",
    alt: "Vitamina E y aceite vegetal",
    description:
      "Conocido como vitamina E, ayuda a proteger la fórmula y acompaña el cuidado antioxidante de la piel. Contribuye a mantener una sensación de piel cuidada, suave y luminosa.",
  },
  {
    name: "Fruit Oil",
    image: "/zanura/assets/fruit_oil.webp",
    alt: "Aceite vegetal de frutas",
    description:
      "Aporta nutrición y flexibilidad a la piel, reforzando la sensación de confort. Su origen vegetal ayuda a completar una fórmula natural, suave y pensada para el cuidado diario.",
  },
];

export default function AcercaDe() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 140]);
  const textY = useTransform(scrollY, [0, 500], [0, 70]);
  const heroOpacity = useTransform(scrollY, [0, 340], [1, 0]);

  return (
    <div className="w-full bg-[var(--color-zanura-beige)]">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 text-center">
        <motion.div
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute -inset-y-16 inset-x-0 z-0 bg-[var(--color-zanura-blue)]"
          initial={{ opacity: 0 }}
          style={{ y: backgroundY }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <ViewportVideo
            className="h-full w-full object-cover"
            src="/zanura/assets/PANTALLA_2_agua.webm"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,37,0.22),rgba(4,18,37,0.06)_50%,rgba(4,18,37,0.28))]" />
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="hero-title relative z-20 max-w-5xl text-[var(--color-zanura-beige)] drop-shadow-[0_12px_38px_rgba(0,0,0,0.38)]"
          initial={{ opacity: 0, y: 20 }}
          style={{ y: textY, opacity: heroOpacity }}
          transition={{ duration: 0.85 }}
        >
          Belleza que perdura,
          <span className="mt-2 block italic">
            entre la naturaleza y la ciencia.
          </span>
        </motion.h1>

        <motion.div
          animate={{ opacity: 1 }}
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/80"
          initial={{ opacity: 0 }}
          style={{ opacity: heroOpacity }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Descubre
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 opacity-80" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-20 w-full px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.7fr] md:gap-20">
          <h2 className="font-serif text-4xl leading-none text-[var(--color-zanura-blue)] [font-variant-ligatures:none] [font-feature-settings:'liga'_0,'dlig'_0] md:text-6xl">
            Dónde nace
            <span className="block">ZANURA</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-black/68 md:text-lg">
            <p>
              ZANURA nace de la necesidad de recuperar el cuidado como un
              momento propio: sencillo, sensorial y consciente. La marca se
              inspira en la pureza del agua, en la calma de los rituales
              mediterráneos y en el valor de los ingredientes naturales.
            </p>
            <p>
              Su universo visual y conceptual parte de la idea de la fuente
              como origen: un lugar donde todo fluye, se limpia y vuelve a
              empezar. A partir de esta inspiración, ZANURA propone una
              cosmética pensada para acompañar la rutina diaria desde la
              frescura, la suavidad y el bienestar.
            </p>
            <p>
              Cada producto busca transformar un gesto cotidiano en una
              experiencia más íntima y pausada. No se trata solo de aplicar
              cosmética, sino de crear un pequeño ritual: respirar, cuidar la
              piel y conectar con una sensación de calma.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
          <motion.figure
            className="overflow-hidden bg-[var(--color-zanura-sand)]"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              alt="Persona aplicando producto facial con un rodillo"
              className="aspect-[4/3] h-full w-full object-cover"
              src="/zanura/assets/facial_rodillo.webp"
            />
          </motion.figure>
          <motion.figure
            className="overflow-hidden bg-[var(--color-zanura-sand)] md:mt-20"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              alt="Momento de cuidado sensorial con piel luminosa"
              className="aspect-[4/3] h-full w-full object-cover"
              src="/zanura/assets/cuidado_sensorial.webp"
            />
          </motion.figure>
        </div>
      </section>

      <section className="relative z-20 w-full border-t border-[var(--color-zanura-sand)] bg-[var(--color-zanura-sand)]/45 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title mb-14 text-[var(--color-zanura-blue)]">
            Nuestros ingredientes
          </h2>

          <article className="overflow-hidden bg-[var(--color-zanura-blue)] text-[var(--color-zanura-beige)]">
            <img
              alt="Aceite de oliva virgen extra, ingrediente base de ZANURA"
              className="aspect-[16/7] min-h-72 w-full object-cover"
              src="/zanura/assets/aceite_de_oliva_virgen_extra.webp"
            />
            <div className="grid gap-6 p-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl">
                Aceite de oliva virgen extra
              </h3>
              <p className="text-sm leading-7 text-[var(--color-zanura-beige)]/78">
                Rico en ácidos grasos y antioxidantes naturales, ayuda a nutrir
                la piel en profundidad, aportando suavidad, confort y una
                sensación de elasticidad. Es el ingrediente base de la fórmula
                y conecta la marca con el origen mediterráneo y natural de
                ZANURA.
              </p>
            </div>
          </article>

          <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {ingredients.map((ingredient) => (
              <article className="group" key={ingredient.name}>
                <div className="mb-5 aspect-square overflow-hidden bg-[var(--color-zanura-sand)]">
                  <img
                    alt={ingredient.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    src={ingredient.image}
                  />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-zanura-blue)]">
                  {ingredient.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/58">
                  {ingredient.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
