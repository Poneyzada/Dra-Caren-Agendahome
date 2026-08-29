import React from 'react';
import { MessageCircle, FileCheck, Phone } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenTriagingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenTriagingModal }) => {
  const whatsappUrl = "https://wa.me/5511937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20no%20celular%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar.";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Phone Call Button */}
        <a
          href="tel:11937711353"
          aria-label="Ligar para Dra. Caren"
          className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-navy-950 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-navy-900" />
        </a>

        {/* Modal Triaging Trigger Button */}
        <button
          onClick={onOpenTriagingModal}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-navy-900 active:bg-navy-950 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm text-center leading-tight active:scale-[0.98] transition-transform"
        >
          <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Fazer Triagem (1 min)</span>
        </button>

        {/* WhatsApp Direct Conversion Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-md text-center leading-tight active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp Direto</span>
        </a>

      </div>
    </div>
  );
};

