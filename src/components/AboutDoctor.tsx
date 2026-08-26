import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, ShieldCheck, FileSpreadsheet, Home, Phone, Mail } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    /* SEÇÃO COM AZUL SUAVE / LEVE (#edf4fa) */
    <section id="sobre" className="relative py-12 md:py-24 bg-[#edf4fa] text-slate-900 overflow-hidden border-y border-sky-100 min-h-[700px] flex items-center">
      
      {/* 🖼️ FOTO DA DRA. CAREN NO FUNDO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/dra-caren.webp" 
          alt="Dra. Caren Stefany - Fonoaudióloga" 
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top lg:object-[16%_top] filter brightness-100 contrast-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/caren-stefany.jpg';
            }
          }}
        />

        {/* Gradiente no Mobile: o topo e o meio são transparentes para ver a Dra. Caren e o card, fundindo suavemente no texto embaixo */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-45% to-[#edf4fa] to-65%" />
        
        {/* Gradiente no Desktop: esquerda transparente para ver ela no fundo, fundindo suavemente para o azul leve na direita */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#edf4fa]/80 via-45% to-[#edf4fa] to-65%" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* pt-2 no mobile posiciona o cartão lá em cima no espaço vazio do lustre */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2 sm:pt-4 lg:pt-0">
          
          {/* LADO ESQUERDO: CARTÃO POSICIONADO NO ESPAÇO VAZIO DO LUSTRE NO MOBILE */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              {/* CARTÃO COM AS INFORMAÇÕES DA DOUTORA NO ESPAÇO DO LUSTRE */}
              <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-sky-100 shadow-xl text-slate-900 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>CRFa Ativo</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Atendimento no Lar
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-navy-950">
                    Dra. Caren Stefany
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                    Fonoaudióloga | Especialista em Disfagia e Neurofuncional
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Itatiba, Bragança Paulista & Morungaba</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>(11) 993771-1353</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate max-w-[140px]">fgacarenstefany@gmail.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DIREITO: TEXTO COM MARGEM SUPERIOR NO MOBILE (mt-[280px]) PARA DEIXAR O ROSTO DELA 100% LIVRE NO MEIO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left mt-[270px] sm:mt-[320px] lg:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-navy-900 border border-sky-200 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              A <strong className="text-navy-950 font-semibold">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-emerald-700 font-semibold">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-navy-950 font-semibold">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            {/* Destaques Técnicos em Cards Claros */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white/90 p-4 rounded-2xl border border-sky-100 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-[11px] text-slate-600">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-sky-100 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-[11px] text-slate-600">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            {/* Frase Manuscrita */}
            <div className="py-1">
              <span className="handwriting text-xl sm:text-2xl text-navy-900 font-bold">
                ✎ "Cada paciente é único. Minha missão é cuidar para que a alimentação no lar volte a ser um momento de paz."
              </span>
            </div>

            {/* Botão de Triagem */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sobre a Dra. Caren Stefany')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-emerald-600/20 transition-all cursor-pointer active:scale-[0.99]"
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
