import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, ShieldCheck, FileSpreadsheet, Home } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden bg-navy-950 text-white min-h-[650px] flex items-center border-y border-navy-800">
      
      {/* 🖼️ FOTO DA DRA. CAREN COMO FUNDO DA DOBRA (IGUAL O VÍDEO DO HERO, SEM CAIXA, SEM QUADRADO) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/dra-caren.webp" 
          alt="Dra. Caren Stefany - Fonoaudióloga" 
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top lg:object-left-top opacity-35 lg:opacity-45 filter brightness-105 contrast-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/caren-stefany.jpg';
            }
          }}
        />

        {/* Gradientes Suaves de Transição para Leitura Perfeita do Texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/90 to-slate-950 lg:from-navy-950/40 lg:via-navy-950/85 lg:to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-transparent to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-transparent to-navy-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Espaço de Profundidade com Badge Flutuante (Sem Foto em Caixa!) */}
          <div className="lg:col-span-5 hidden lg:block space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              {/* Badge Elegante Flutuando sobre a Foto de Fundo */}
              <div className="liquid-glass-dark p-6 rounded-3xl border border-white/15 shadow-2xl max-w-sm backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                    Fonoaudiologia Domiciliar
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">Dra. Caren Stefany</h3>
                <p className="text-xs text-emerald-300 font-semibold mb-3">Especialista em Disfagia & Neurofuncional</p>
                <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                  Atendimento humanizado diretamente na residência dos pacientes em Itatiba, Bragança Paulista e Morungaba.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Text Column: Autoridade & Informações Clínicas */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A <strong className="text-white font-semibold">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-sky-300 font-semibold">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-emerald-300 font-semibold">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            {/* Feature Cards no Fundo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="liquid-glass-dark p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-xs text-slate-300">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="liquid-glass-dark p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-300">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            {/* Frase Manuscrita */}
            <div className="py-2">
              <span className="handwriting text-2xl text-sky-200 font-bold">
                ✎ "Cada paciente é único. Minha missão é cuidar para que a alimentação no lar volte a ser um momento de paz."
              </span>
            </div>

            {/* Action CTA opening Triaging Modal */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sobre a Dra. Caren Stefany')}
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer active:scale-[0.99]"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Fazer Triagem & Agendar Avaliação (1 min)</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
