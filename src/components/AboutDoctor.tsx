import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, Mail, Phone, Home, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
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
              <div className="relative bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xl overflow-hidden text-slate-900">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 flex items-center justify-center border border-slate-200">
                  
                  <img 
                    src="/dra-caren.webp" 
                    alt="Dra. Caren Stefany - Fonoaudióloga" 
                    className="w-full h-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Doctor Info Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="glass-card-dark p-3.5 rounded-xl border border-white/20 shadow-xl text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-sm tracking-wide text-white font-display">Dra. Caren Stefany</h3>
                            <ShieldCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                          </div>
                          <p className="text-[11px] text-sky-200 font-medium">Especialista em Disfagia e Neurofuncional</p>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                          CRFa Ativo
                        </span>
                      </div>

                      <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1 text-slate-200 font-medium">
                          <Home className="w-3 h-3 text-emerald-400" />
                          <span>Atendimento em Domicílio</span>
                        </span>
                        <span className="text-sky-300 font-semibold">(11) 993771-1353</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-4 space-y-2 border-t border-slate-100 mt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Itatiba, Bragança Paulista, Morungaba e região</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-navy-800" />
                      <span>(11) 993771-1353</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Mail className="w-3.5 h-3.5 text-navy-800" />
                      <span>fgacarenstefany@gmail.com</span>
                    </span>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider border border-navy-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
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
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Rigor Técnico & Científico</span>
                </div>
                <p className="text-xs text-slate-500">Protocolos clínicos atualizados para avaliação de deglutição no leito/mesa.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-500">Cuidado empático e atencioso focado no bem-estar físico e emocional.</p>
              </div>
            </div>

            <div className="pt-2">
              <span className="handwriting text-2xl text-navy-900 font-bold">
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
