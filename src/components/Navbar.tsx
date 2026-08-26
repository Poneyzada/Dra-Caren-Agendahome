import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, FileCheck, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenTriagingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTriagingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20fonoaudiol%C3%B3gica%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3' 
          : 'bg-gradient-to-b from-navy-950/95 via-navy-950/80 to-transparent backdrop-blur-md py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Doctor Title - Crystal Clear White Contrast Before & After Scroll */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-display font-extrabold text-base sm:text-lg shadow-lg group-hover:scale-105 transition-transform border border-emerald-400">
              CS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base sm:text-lg leading-tight tracking-tight drop-shadow-sm">
                  Dra. Caren Stefany
                </span>
                <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 mr-1 text-emerald-400" />
                  CRFa Ativo
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-sky-200 font-medium tracking-wide drop-shadow-sm">
                Fonoaudiologia Neurofuncional & Disfagia
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links with Generous Spacing */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-slate-200">
            <a href="#servicos" className="hover:text-emerald-400 transition-colors py-1">Serviços Domiciliares</a>
            <a href="#domiciliar" className="hover:text-emerald-400 transition-colors py-1">Regiões Atendidas</a>
            <a href="#sobre" className="hover:text-emerald-400 transition-colors py-1">Sobre a Dra.</a>
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors py-1">Como Funciona</a>
            <a href="#triagem" className="hover:text-emerald-400 transition-colors py-1 text-emerald-300 font-semibold">Triagem 1 min</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors py-1">Dúvidas</a>
          </nav>

          {/* Action CTAs with Clean Spacing & High Contrast */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a 
              href="tel:119937711353" 
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(11) 993771-1353</span>
            </a>

            {onOpenTriagingModal ? (
              <button
                onClick={onOpenTriagingModal}
                className="relative inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-all cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <FileCheck className="w-4 h-4 shrink-0" />
                <span>Triagem & Agendamento</span>
              </button>
            ) : (
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Agendar Avaliação</span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Frosted Navy Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-2xl border-b border-navy-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl text-white">
          <div className="flex flex-col space-y-3 font-medium text-slate-200">
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Serviços Domiciliares
            </a>
            <a 
              href="#domiciliar" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Regiões (Itatiba, Bragança & Morungaba)
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Sobre a Dra. Caren Stefany
            </a>
            <a 
              href="#triagem" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30"
            >
              Fazer Triagem Domiciliar (1 min)
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Perguntas Frequentes
            </a>
          </div>
          
          <div className="pt-3 border-t border-navy-800 flex flex-col gap-3">
            {onOpenTriagingModal ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTriagingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl shadow-md text-center"
              >
                <FileCheck className="w-5 h-5" />
                Fazer Triagem & Agendar
              </button>
            ) : (
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl shadow-md text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Agendar Avaliação no WhatsApp
              </a>
            )}
            <a 
              href="mailto:fgacarenstefany@gmail.com"
              className="text-xs text-center text-slate-400 font-medium hover:text-white py-1"
            >
              fgacarenstefany@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
