import React from 'react';
import { Home, HeartPulse, Clock, Sparkles, MapPin, FileSpreadsheet } from 'lucide-react';

interface HomeCareHighlightProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const HomeCareHighlight: React.FC<HomeCareHighlightProps> = ({ onOpenTriagingModal }) => {
  const benefits = [
    {
      icon: <Home className="w-6 h-6 text-emerald-400" />,
      title: "Sem Estresse de Deslocamento",
      description: "O paciente permanece no conforto do seu próprio lar, evitando viagens desgastantes e perigosas até consultórios."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-sky-400" />,
      title: "Avaliação no Ambiente Real",
      description: "A reabilitação é feita no local exato onde o idoso faz suas refeições diárias, permitindo ajustes realistas de postura e utensílios."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      title: "Envolvimento da Família & Cuidador",
      description: "Orientamos presencialmente quem prepara a comida e quem acompanha o idoso, garantindo continuidade do tratamento."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: "Respeito ao Tempo e Ritmo",
      description: "Atendimento calmo e individualizado, respeitando os horários de medicação e apetite do paciente neurológico."
    }
  ];

  return (
    <section id="domiciliar" className="py-20 md:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-y border-navy-800">
      
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Atendimento Domiciliar: Itatiba, Bragança & Morungaba</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              A clínica vai até a sua casa com a máxima segurança.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Para um idoso com doença neurológica ou dificuldade de deglutição, a alimentação é um momento delicado. O <strong className="text-white font-semibold">Atendimento Domiciliar da Dra. Caren Stefany</strong> garante que a reabilitação aconteça sem atropelos, na rotina real da família em <strong className="text-emerald-300">Itatiba, Bragança Paulista, Morungaba e região</strong>.
            </p>

            {/* Handwritten badge accent */}
            <div className="py-2">
              <span className="handwriting text-2xl text-sky-300 font-bold tracking-wide">
                ♡ "Segurança alimentar e dignidade onde o paciente se sente protegido."
              </span>
            </div>

            {/* CTA Button ALWAYS opening the ICP Triaging Modal */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Atendimento Domiciliar Regional')}
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all text-base text-center cursor-pointer active:scale-[0.99]"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Fazer Triagem & Agendar Domiciliar (1 min)</span>
              </button>
            </div>
          </div>

          {/* Right Column Benefits List */}
          <div className="lg:col-span-5 space-y-4">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="liquid-glass-dark p-5 rounded-2xl border border-white/10 hover:border-sky-400/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-1 font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
