import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, FileSpreadsheet } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    /* 100% SEM AZUL ESCURO / SEM SLATE ESCURO - FUNDO TOTALMENTE BRANCO & CLARO */
    <section id="sobre" className="relative py-20 md:py-32 overflow-hidden bg-white text-slate-900 min-h-[650px] flex items-center border-y border-slate-200/80">
      
      {/* 🖼️ FOTO DA DRA. CAREN COMO FUNDO DA DOBRA BRANCA (SEM AZUL ESCURO NO FUNDO) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/dra-caren.webp" 
          alt="Dra. Caren Stefany - Fonoaudióloga" 
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-[center_15%] lg:object-[20%_top] opacity-80 filter brightness-105 contrast-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/caren-stefany.jpg';
            }
          }}
        />

        {/* Gradiente 100% Branco Limpo - SEM NENHUM TOM ESCURO OU AZUL NO FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/85 to-white lg:from-transparent lg:via-white/90 lg:to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda Reservada para a Foto da Dra. Caren de Fundo (Sem cobrir o rosto dela!) */}
          <div className="hidden lg:block lg:col-span-5 h-[400px]" />

          {/* Coluna Direita: Texto em Fundo Claro em Azul Marinho/Ônix de Alta Legibilidade */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left pt-36 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-900 border border-navy-200 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A <strong className="text-slate-900 font-semibold">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-navy-900 font-semibold">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-slate-900 font-semibold">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            {/* Feature Cards no Fundo Claro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/95 p-4 rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-xs text-slate-500">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="bg-white/95 p-4 rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-500">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            {/* Frase Manuscrita */}
            <div className="py-1">
              <span className="handwriting text-xl sm:text-2xl text-navy-900 font-bold">
                ✎ "Cada paciente é único. Minha missão é cuidar para que a alimentação no lar volte a ser um momento de paz."
              </span>
            </div>

            {/* Action CTA opening Triaging Modal */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sobre a Dra. Caren Stefany')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer active:scale-[0.99]"
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
