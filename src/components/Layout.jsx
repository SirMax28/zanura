import { useEffect, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet(); // Permite "congelar" la vista previa mientras ocurre el fade-out
  const requestRef = useRef();
  const lenisRef = useRef();

  useEffect(() => {
    // Lenis Smooth Scroll Init
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestRef.current = requestAnimationFrame(raf);
    }
    requestRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(requestRef.current);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <AnimatePresence 
          mode="wait" 
          onExitComplete={() => {
            // El scroll hacia arriba ahora se hace fluidamente después de que la página ha desaparecido
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
        >
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(6px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
