import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 4 seconds to prevent blocking UI on mobile & desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/5511937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Atendimento%20Domiciliar.";

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip Card with Smooth Auto-Fade Out */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900 text-white text-xs p-3 rounded-2xl shadow-2xl border border-slate-700 max-w-[240px] sm:max-w-xs relative flex items-start gap-2.5"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0 mt-1" />
            <div className="space-y-0.5">
              <p className="font-bold text-white text-xs">Dra. Caren Stefany</p>
              <p className="text-[11px] text-slate-300">Fonoaudiologia Domiciliar. Dúvidas no WhatsApp!</p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white transition-colors ml-1 p-0.5"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar via WhatsApp"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 active:scale-95 transition-all duration-300 border-2 border-white"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-30 group-hover:opacity-60" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" />
      </a>

    </div>
  );
};

