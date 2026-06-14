import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, Trash2, X } from "lucide-react";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function CartDrawer({
  cartItems,
  isOpen,
  onClose,
  onQuantityChange,
}) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceValue * item.quantity,
    0,
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <motion.button
            animate={{ opacity: 1 }}
            aria-label="Cerrar carrito"
            className="absolute inset-0 cursor-pointer bg-zanura-black/20 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            type="button"
          />

          <motion.aside
            animate={{ x: 0 }}
            aria-label="Carrito de compra"
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-zanura-beige shadow-2xl"
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="relative flex items-center justify-center border-b border-zanura-sand px-8 py-6">
              <h2 className="font-serif text-xl uppercase tracking-widest text-zanura-blue">
                Tu carrito
              </h2>
              <button
                aria-label="Cerrar carrito"
                className="group absolute right-6 top-5 rounded-full p-2 transition-colors hover:bg-zanura-sand"
                onClick={onClose}
                type="button"
              >
                <X
                  className="text-gray-500 transition duration-300 group-hover:rotate-90 group-hover:text-zanura-black"
                  size={20}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-grow flex-col items-center justify-center space-y-6 p-8 text-center">
                <div className="h-16 w-16 rounded-full border border-dashed border-gray-300 border-t-zanura-blue opacity-50" />
                <div className="space-y-2">
                  <p className="font-serif text-lg text-zanura-black">
                    Tu bolsa está vacía
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Es hora de nutrir tu esencia
                  </p>
                </div>
                <button
                  className="group flex items-center gap-2 border-b border-zanura-black pb-1 text-xs uppercase tracking-widest transition-colors hover:border-zanura-blue hover:text-zanura-blue"
                  onClick={() => {
                    onClose();
                    document
                      .getElementById("productos")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  type="button"
                >
                  Descubrir productos
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={14}
                  />
                </button>
              </div>
            ) : (
              <div className="flex-grow space-y-6 overflow-y-auto p-6">
                {cartItems.map((item) => (
                  <article
                    className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-zanura-sand pb-6"
                    key={item.id}
                  >
                    <img
                      alt={item.name}
                      className="aspect-[4/5] h-full w-full object-cover"
                      src={item.image}
                    />
                    <div className="flex min-w-0 flex-col justify-between py-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xs font-semibold uppercase leading-5 tracking-[0.12em]">
                            {item.name}
                          </h3>
                          <p className="mt-1 font-serif text-sm">
                            {item.price}
                          </p>
                        </div>
                        <button
                          aria-label={`Eliminar ${item.name}`}
                          className="text-black/40 transition-colors hover:text-zanura-blue"
                          onClick={() => onQuantityChange(item.id, 0)}
                          type="button"
                        >
                          <Trash2 size={16} strokeWidth={1.4} />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-black/15">
                          <button
                            aria-label={`Reducir cantidad de ${item.name}`}
                            className="p-2 transition-colors hover:bg-zanura-sand"
                            onClick={() =>
                              onQuantityChange(item.id, item.quantity - 1)
                            }
                            type="button"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="min-w-8 text-center text-xs">
                            {item.quantity}
                          </span>
                          <button
                            aria-label={`Aumentar cantidad de ${item.name}`}
                            className="p-2 transition-colors hover:bg-zanura-sand"
                            onClick={() =>
                              onQuantityChange(item.id, item.quantity + 1)
                            }
                            type="button"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">
                          {formatPrice(item.priceValue * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="space-y-4 border-t border-zanura-sand bg-white p-8">
              <div className="mb-6 flex justify-between text-sm font-semibold uppercase tracking-widest">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-center text-[10px] uppercase tracking-widest text-gray-400">
                Envío calculado en el checkout.
              </p>
              <button
                className={`w-full py-4 text-xs ${
                  cartItems.length === 0
                    ? "btn-primary cursor-not-allowed opacity-50"
                    : "btn-primary"
                }`}
                disabled={cartItems.length === 0}
                type="button"
              >
                Proceder al pago
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
