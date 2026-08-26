import React from 'react';
import { Phone, FileSpreadsheet, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenTriagingModal?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenTriagingModal }) => {
  const whatsappUrl = "https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar.";

  return (
    <aside aria-label="Ações rápidas mobile" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        
        {/* Call Link */}
        <a 
          href="tel:119937711353"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 text-[10px] font-bold active:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-navy-800 mb-0.5" />
          <span>Ligar</span>
        </a>

        {/* Triaging Modal Trigger (Center Main CTA) */}
        <button
          onClick={onOpenTriagingModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-[10px] font-bold active:scale-95 transition-transform shadow-md"
        >
          <FileSpreadsheet className="w-4 h-4 mb-0.5" />
          <span>Triagem (1 min)</span>
        </button>

        {/* Direct WhatsApp Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-900 text-white text-[10px] font-bold active:scale-95 transition-transform shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

      </div>
    </aside>
  );
};
