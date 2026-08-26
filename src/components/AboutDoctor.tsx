import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, GraduationCap, ShieldCheck, FileSpreadsheet, Home, Phone, Mail } from 'lucide-react';

interface AboutDoctorProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenTriagingModal }) => {
  return (
    /* SEÇÃO COM AZUL SUAVE / LEVE (#edf4fa) */
    <section id="sobre" className="py-16 md:py-24 bg-[#edf4fa] text-slate-900 overflow-hidden border-y border-sky-100 relative">
      
      {/* Detalhe de iluminação suave no fundo azul */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LADO ESQUERDO: FOTO EXATAMENTE ONDE ESTAVA (SEM MOLDURA DE CAIXA/QUADRADO) + INFORMAÇÕES DELA EMBAIXO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
          >
            {/* A Foto fica direto na dobra, sem caixa branca de fundo em volta */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full shadow-xl">
              <img 
                src="/dra-caren.webp" 
                alt="Dra. Caren Stefany - Fonoaudióloga" 
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/caren-stefany.jpg';
                  }
                }}
              />
              {/* Fade sutil no rodapé da imagem para integrar perfeitamente ao azul leve */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* AS INFORMAÇÕES DELA EMBAIXO DA FOTO */}
            <div className="mt-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-sky-100 shadow-md text-slate-900 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  CRFa Ativo
                </span>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                  100% Domiciliar
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display text-navy-950">
                  Dra. Caren Stefany
                </h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  Fonoaudióloga | Especialista em Disfagia e Neurofuncional
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-emerald-600 shrink-0" />
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

          {/* LADO DIREITO: OS TEXTOS ONDE O AZUL TOMA CONTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
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

            {/* Destaques Técnicos */}
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
