import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, Mail, Phone, Home, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Doctor Card Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="relative bg-navy-950 rounded-3xl p-5 border border-navy-800 shadow-2xl overflow-hidden text-white">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-navy-900 via-slate-900 to-navy-950 flex items-center justify-center border border-navy-800">
                  
                  <img 
                    src="/caren-stefany.jpg" 
                    alt="Dra. Caren Stefany - Fonoaudióloga" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.svg-fallback-about-clean')) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'svg-fallback-about-clean w-full h-full flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-navy-900 via-navy-950 to-slate-950 text-white relative';
                        fallbackDiv.innerHTML = `
                          <div class="relative z-10 pt-2">
                            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 border border-white/20 text-sky-200 uppercase tracking-wider">
                              Fonoaudiologia 100% Domiciliar
                            </span>
                          </div>

                          <div class="relative z-10 my-auto py-4 flex flex-col items-center">
                            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-navy-700 to-navy-950 p-1 shadow-2xl border border-sky-400/40 relative flex items-center justify-center">
                              <div class="w-full h-full rounded-full bg-navy-900 flex items-center justify-center overflow-hidden">
                                <svg class="w-20 h-20 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                  <path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(56,189,248,0.15)"/>
                                  <path d="M18 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" stroke="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <h3 class="text-xl font-bold font-display text-white mt-4">Dra. Caren Stefany</h3>
                            <p class="text-xs text-sky-300 font-medium">Especialista em Disfagia & Reabilitação</p>
                          </div>

                          <div class="relative z-10 pb-1 w-full">
                            <div class="bg-emerald-950/80 backdrop-blur-md rounded-xl p-3 text-center border border-emerald-500/30 text-xs text-emerald-300 font-bold">
                              🏡 Itatiba, Bragança & Morungaba
                            </div>
                          </div>
                        `;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-base text-white font-display">Dra. Caren Stefany</h3>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-xs text-sky-300 font-semibold">Fonoaudióloga | Especialista em Disfagia</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                      CRFa Ativo
                    </span>
                  </div>

                  <div className="pt-3 border-t border-navy-800 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Home className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Itatiba, Bragança Paulista, Morungaba e região</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>(11) 993771-1353</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-sky-400" />
                      <span>fgacarenstefany@gmail.com</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 text-white text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Autoridade & Dedicação Clínica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Especialista em devolver a segurança e o prazer de se alimentar com dignidade no lar.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              A <strong className="text-slate-900">Dra. Caren Stefany</strong> realiza seu trabalho de forma <strong className="text-navy-900">100% Domiciliar</strong>, cuidando de idosos com alterações de deglutição (Disfagia) e sequelas neurológicas de Doença de Parkinson, Alzheimer e AVC em <strong className="text-slate-900">Itatiba, Bragança Paulista e Morungaba</strong>.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Levar a reabilitação até a casa do paciente elimina os riscos e o desgaste físico de viagens até consultórios, além de permitir um treinamento muito mais eficaz com os cuidadores na cozinha da própria família.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-xs text-slate-500">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-500">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            <div className="pt-2">
              <span className="handwriting text-2xl text-navy-800 font-bold">
                ✎ "Cada paciente é único. Minha missão é cuidar para que a alimentação no lar volte a ser um momento de paz."
              </span>
            </div>

            {/* Action CTA opening Triaging Modal */}
            <div className="pt-4">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Sobre a Dra. Caren Stefany')}
                className="inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer active:scale-[0.99]"
              >
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                <span>Fazer Triagem & Agendar Avaliação (1 min)</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
