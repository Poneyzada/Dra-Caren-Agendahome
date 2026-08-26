import React from 'react';
import { AlertCircle, AlertTriangle, ShieldAlert, ArrowRight, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

interface AlertRibbonProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AlertRibbon: React.FC<AlertRibbonProps> = ({ onOpenTriagingModal }) => {
  const warningSigns = [
    {
      title: "Engasgos Recorrentes",
      description: "Tosse contínua, pigarro ou voz molhada logo após engolir água, sucos ou alimentos.",
    },
    {
      title: "Dificuldade para Engolir (Disfagia)",
      description: "Esforço excessivo para mastigar, alimento parado na boca ou medo de se alimentar.",
    },
    {
      title: "Doenças Neurológicas",
      description: "Diagnóstico recente ou avançado de AVC, Doença de Parkinson, Alzheimer ou ELA.",
    },
    {
      title: "Risco de Broncoaspiração",
      description: "Entrada de resíduos alimentares no pulmão, podendo causar pneumonias de repetição.",
    }
  ];

  return (
    <section className="py-12 bg-navy-950 text-white relative overflow-hidden border-y border-navy-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Sinal de Alerta em Itatiba, Bragança & Morungaba</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Seu familiar idoso apresenta algum destes sintomas ao se alimentar?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A alteração da deglutição (Disfagia) não é um envelhecimento comum. Requer avaliação fonoaudiológica domiciliar especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {warningSigns.map((sign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900/80 backdrop-blur-md p-5 rounded-2xl border border-navy-700/80 hover:border-sky-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white mb-2 group-hover:text-sky-300 transition-colors">
                {sign.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {sign.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-navy-900/40 p-6 rounded-2xl border border-navy-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">A intervenção precoce no lar evita complicações graves</h4>
              <p className="text-xs text-slate-300">Garantimos a consistência alimentar correta e hidratação segura na sua residência.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sinais de Alerta')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm shrink-0 cursor-pointer active:scale-[0.99]"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Fazer Triagem & Agendar Visita (1 min)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
