import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const { pathname } = useLocation();
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Butonun görünmesi için gereken kaydırma miktarı (px)
      if (window.scrollY > 300) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-sans selection:bg-accent-primary selection:text-white pb-24 md:pb-0 relative">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Mobile Sticky Bottom Button */}
      <AnimatePresence>
        {showStickyButton && (
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-bg-primary via-bg-primary to-transparent pointer-events-none"
          >
            <a 
              href="tel:+905462063001" 
              className="flex items-center justify-center gap-2 w-full bg-text-primary text-white py-3.5 rounded-xl font-medium shadow-lg hover:bg-accent-primary transition-colors active:scale-[0.98] pointer-events-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Arayın</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
