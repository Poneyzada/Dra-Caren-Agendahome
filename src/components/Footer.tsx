import React from 'react';
import { Mail, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.";

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-24 md:pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand & Doctor Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-navy-950 flex items-center justify-center font-display font-bold text-base shadow-md">
                CS
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Dra. Caren Stefany</h3>
                <p className="text-xs text-sky-300">Fonoaudióloga Especialista em Disfagia</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Atendimento Fonoaudiológico Domiciliar especializado em idosos com doenças neurológicas (Parkinson, Alzheimer, AVC) e alterações da deglutição (Disfagia).
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs font-semibold text-sky-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Conselho Regional de Fonoaudiologia (CRFa Ativo)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-display">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#servicos" className="hover:text-sky-300 transition-colors">Disfagia & Deglutição</a></li>
              <li><a href="#servicos" className="hover:text-sky-300 transition-colors">Doenças Neurológicas</a></li>
              <li><a href="#servicos" className="hover:text-sky-300 transition-colors">Prevenção de Engasgos</a></li>
              <li><a href="#domiciliar" className="hover:text-sky-300 transition-colors">Atendimento Domiciliar</a></li>
              <li><a href="#sobre" className="hover:text-sky-300 transition-colors">Sobre a Dra. Caren Stefany</a></li>
              <li><a href="#triagem" className="hover:text-sky-300 transition-colors">Triagem Rápida (1 min)</a></li>
              <li><a href="#faq" className="hover:text-sky-300 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact Direct Box */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-display">Canais de Atendimento</h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current shrink-0" />
                <div>
                  <span className="block font-bold text-xs text-white">WhatsApp & Agendamento</span>
                  <span className="text-[11px] text-slate-300">(11) 993771-1353</span>
                </div>
              </a>

              <a 
                href="mailto:fgacarenstefany@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700 text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="block font-bold text-xs text-white">E-mail Profissional</span>
                  <span className="text-[11px] text-slate-300">fgacarenstefany@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-300 pt-1 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento Domiciliar em Itatiba, Bragança Paulista, Morungaba e região</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-center text-[11px] text-slate-400 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed">
            <strong>Aviso Legal & Médico:</strong> As informações apresentadas nesta página têm caráter informativo e educacional. A avaliação presencial ou domiciliar realizada por fonoaudiólogo habilitado é indispensável para o diagnóstico e plano terapêutico individualizado.
          </p>
          <p>© {new Date().getFullYear()} Dra. Caren Stefany - Todos os direitos reservados. Fonoaudiologia Neurofuncional e Disfagia.</p>
        </div>

      </div>
    </footer>
  );
};
