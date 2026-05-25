import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  // Evitar scroll de fondo al abrir
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop con desenfoque elegante */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-zanura-black/20 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-zanura-beige shadow-2xl flex flex-col pt-0 z-10"
          >
            {/* Header del Drawer */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-zanura-sand">
              <h2 className="font-serif text-xl tracking-widest uppercase text-zanura-blue text-center w-full">Tu Carrito</h2>
              <button 
                onClick={onClose} 
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-zanura-sand transition-colors group"
                aria-label="Cerrar carrito"
              >
                <X size={20} className="text-gray-500 group-hover:text-zanura-black transition-colors group-hover:rotate-90 duration-300" strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Contenido (Vacío de momento) */}
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border border-dashed border-gray-300 border-t-zanura-blue opacity-50"
              />
              <div className="space-y-2">
                <p className="font-serif text-lg text-zanura-black">Tu bolsa está vacía</p>
                <p className="text-xs tracking-widest uppercase text-gray-500">Es hora de nutrir tu esencia</p>
              </div>
              <button
                onClick={(e) => {
                  onClose();
                  document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-4 border-b border-zanura-black text-xs uppercase tracking-widest pb-1 hover:text-zanura-blue hover:border-zanura-blue transition-colors flex items-center gap-2 group"
              >
                Descubrir productos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Footer del Drawer */}
            <div className="p-8 bg-white border-t border-zanura-sand space-y-4">
              <div className="flex justify-between text-sm uppercase tracking-widest font-semibold mb-6">
                <span>Subtotal</span>
                <span>0.00 €</span>
              </div>
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mb-4">Envío calculado en el checkout.</p>
              <button className="w-full btn-primary py-4 text-xs opacity-50 cursor-not-allowed">
                Proceder al pago
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}