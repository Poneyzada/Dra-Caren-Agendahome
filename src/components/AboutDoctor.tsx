import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, ShieldCheck, FileSpreadsheet, Home, Phone, Mail } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-navy-950 text-white overflow-hidden border-y border-navy-800">
      
      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait & Credential Badge (Crisp & High Contrast on Mobile + Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Subtle Depth Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-navy-700/40 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

              {/* Photo Portrait Frame - Clean & Bright */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full flex items-center justify-center border border-white/15 shadow-2xl bg-slate-900">
                
                <img 
                  src="/dra-caren.webp" 
                  alt="Dra. Caren Stefany - Fonoaudióloga" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/caren-stefany.jpg';
                    }
                  }}
                />

                {/* Soft gradient bottom blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />

                {/* 🌟 CARD DE INFORMAÇÕES DA DOUTORA (RESTAURADO COM ALTO DESTAQUE E VISIBILIDADE) */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="glass-card-dark p-4 rounded-2xl border border-white/20 shadow-2xl text-white backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-sm sm:text-base text-white font-display">Dra. Caren Stefany</h3>
                          <ShieldCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20 shrink-0" />
                        </div>
                        <p className="text-[11px] sm:text-xs text-sky-200 font-medium">Especialista em Disfagia e Neurofuncional</p>
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/30 px-2.5 py-1 rounded-md shrink-0">
                        CRFa Ativo
                      </span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 text-slate-200 font-medium">
                        <Home className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Itatiba / Bragança / Morungaba</span>
                      </span>
                      <span className="text-sky-300 font-semibold">(11) 993771-1353</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile Quick Contact Badges */}
              <div className="pt-3 flex items-center justify-between text-xs text-slate-300 px-1">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>(11) 993771-1353</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate max-w-[170px]">fgacarenstefany@gmail.com</span>
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Text Column: High Contrast Clinical Authority */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
              A <strong className="text-white font-semibold">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-sky-300 font-semibold">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-emerald-300 font-semibold">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="liquid-glass-dark p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-xs text-slate-300">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="liquid-glass-dark p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-300">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            {/* Frase Manuscrita */}
            <div className="py-1">
              <span className="handwriting text-xl sm:text-2xl text-sky-200 font-bold">
                ✎ "Cada paciente é único. Minha missão é cuidar para que a alimentação no lar volte a ser um momento de paz."
              </span>
            </div>

            {/* Action CTA opening Triaging Modal */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sobre a Dra. Caren Stefany')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer active:scale-[0.99]"
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
