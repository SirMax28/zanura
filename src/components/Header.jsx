import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import { ShoppingBag, Search } from "lucide-react";
import { motion } from "framer-motion";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-zanura-beige/90 backdrop-blur-md border-b border-zanura-sand transition-all duration-300">
        <div className="bg-zanura-blue text-zanura-white overflow-hidden py-1">
          <Marquee speed={30}>
            <span className="mx-8 text-xs font-semibold tracking-widest uppercase">
              COMPRA AHORA ➔ ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 50€ ➔ TÚ MEJOR VERSIÓN ➔
            </span>
          </Marquee>
        </div>

        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-8 w-1/3">
            <Link 
              to="/#productos" 
              className="nav-link"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Tienda
            </Link>
            <Link to="/acerca-de" className="nav-link">Acerca De</Link>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link to="/">
              <motion.img
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="/zanura/assets/logo_principal.webp"
                alt="Zanura Logo"
                className="h-8 object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end w-1/3 space-x-6">
            <button className="text-zanura-black hover:text-zanura-blue transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="text-zanura-black hover:text-zanura-blue transition-colors flex items-center space-x-2 group"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="nav-link hidden md:block group-hover:text-zanura-blue">Carrito ({0})</span>
              <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
