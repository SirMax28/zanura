import React from "react";
import { motion } from "framer-motion";

export default function Marquee({ children, speed = 20, className = "" }) {
  // Creamos suficientes copias para asegurar que el contenido superará
  // el 100% de la pantalla, evitando espacios en blanco.
  const copies = [...Array(10)];

  return (
    <div
      className={`overflow-hidden whitespace-nowrap flex w-full ${className}`}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex w-max items-center pr-8">
          {copies.map((_, i) => (
            <React.Fragment key={`a-${i}`}>{children}</React.Fragment>
          ))}
        </div>
        <div className="flex w-max items-center pr-8">
          {copies.map((_, i) => (
            <React.Fragment key={`b-${i}`}>{children}</React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
