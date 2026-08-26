import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, ClipboardList, ShieldCheck, ArrowRight, FileSpreadsheet } from 'lucide-react';

interface CareProcessProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const CareProcess: React.FC<CareProcessProps> = ({ onOpenTriagingModal }) => {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      title: "Triagem Rápida no Site",
      description: "Você responde a 3 perguntas simples no site (1 minuto) informando os sintomas e a cidade (Itatiba, Bragança ou Morungaba)."
    },
    {
      number: "02",
      icon: <CalendarCheck className="w-6 h-6 text-sky-400" />,
      title: "Agendamento da Visita",
      description: "Definimos o dia e horário que melhor se encaixam na rotina de refeição e repouso do seu familiar para a visita no lar."
    },
    {
      number: "03",
      icon: <ClipboardList className="w-6 h-6 text-navy-300" />,
      title: "Avaliação no Lar",
      description: "A Dra. Caren realiza a avaliação clínica da deglutição, mastigação, reflexos e segurança alimentar diretamente na residência."
    },
    {
      number: "04",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Plano & Orientação Prática",
      description: "Início imediato do plano de reabilitação com entrega de orientações escritas e práticas para a equipe de cuidadores e familiares."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Simples</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Como funciona o agendamento do <span className="text-navy-900 underline decoration-navy-400/50 decoration-4">Atendimento Domiciliar</span>?
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Sem complicações burocráticas. Um fluxo ágil para iniciar o cuidado fonoaudiológico em Itatiba, Bragança Paulista e Morungaba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-navy-400/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 flex items-center justify-center font-bold text-white shadow-md">
                    {step.icon}
                  </div>
                  <span className="font-display font-extrabold text-3xl text-slate-300 group-hover:text-navy-900 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2 font-display group-hover:text-navy-900 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal(`Passo ${step.number}`)}
                className="pt-6 mt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-navy-800 text-left w-full cursor-pointer"
              >
                <span>Agendar Passo {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform text-emerald-600" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-navy-50 rounded-2xl p-6 border border-navy-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-navy-950">Pronto para dar o primeiro passo?</h4>
            <p className="text-xs text-slate-600">Atendimento domiciliar em Itatiba, Bragança Paulista e Morungaba.</p>
          </div>
          
          <button
            onClick={() => onOpenTriagingModal && onOpenTriagingModal('Passo a Passo Domiciliar')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all shrink-0 cursor-pointer active:scale-[0.99]"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Fazer Triagem & Iniciar</span>
          </button>
        </div>

      </div>
    </section>
  );
};
