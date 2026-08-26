import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, ShieldCheck, FileSpreadsheet, Home } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    <section id="sobre" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30 text-slate-900 min-h-[600px] flex items-center border-y border-slate-200/80">
      
      {/* 🖼️ FOTO DA DRA. CAREN COMO FUNDO DA DOBRA - BRILHANTE, CLARA & 100% VISÍVEL NO MOBILE & DESKTOP */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/dra-caren.webp" 
          alt="Dra. Caren Stefany - Fonoaudióloga" 
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top lg:object-left-top opacity-70 sm:opacity-80 lg:opacity-90 filter brightness-105 contrast-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/caren-stefany.jpg';
            }
          }}
        />

        {/* Gradientes Clientes & Suaves para Manter o Fundo Claro & Garantir Leitura do Texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/80 to-white lg:from-transparent lg:via-white/90 lg:to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Espaço da Foto com Badge Flutuante sem caixa fechada */}
          <div className="lg:col-span-5 space-y-6 pt-32 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              {/* Badge Elegante Flutuando sobre a Foto Clara de Fundo */}
              <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xl max-w-sm text-slate-900">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-900">
                    Fonoaudiologia Domiciliar
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900">Dra. Caren Stefany</h3>
                <p className="text-xs text-emerald-700 font-semibold mb-2">Especialista em Disfagia & Neurofuncional</p>
                <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Atendimento em Itatiba, Bragança Paulista & Morungaba</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Text Column: Autoridade & Informações Clínicas em Fundo Claro */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left bg-white/90 lg:bg-transparent p-5 sm:p-0 rounded-2xl border lg:border-none border-slate-200/80 shadow-lg lg:shadow-none backdrop-blur-md lg:backdrop-blur-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-900 border border-navy-200 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              A <strong className="text-slate-900 font-semibold">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-navy-900 font-semibold">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-slate-900 font-semibold">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            {/* Feature Cards no Fundo Claro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/90 space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-xs sm:text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-[11px] text-slate-500">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/90 space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-xs sm:text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-[11px] text-slate-500">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer active:scale-[0.99]"
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
