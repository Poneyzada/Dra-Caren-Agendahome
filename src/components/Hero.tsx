import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Home, Heart, ArrowRight, Activity, FileSpreadsheet, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriagingModal }) => {
  const whatsappUrl = "https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20fonoaudiol%C3%B3gica%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.";

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30 text-slate-900 flex items-center">
      
      {/* SOFT LIGHT BACKGROUND VIDEO OVERLAY */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-15 mix-blend-multiply scale-105"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_082433_69699cf8-444b-4484-93cc-053e57896dfd.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Ambient Gradient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-sky-200/40 via-slate-100/50 to-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Conversion Hook */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Pill Tag - Clean Light Theme */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Atendimento Domiciliar: Itatiba, Bragança Paulista & Morungaba</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Atendimento fonoaudiológico <span className="relative inline-block text-navy-900 underline decoration-emerald-400 decoration-4 underline-offset-4">na sua casa</span> para idosos com doenças neurológicas e disfagia.
            </h1>

            {/* Organic Vibe Badge - Light Liquid Glass */}
            <div className="inline-block relative">
              <span className="handwriting text-xl sm:text-2xl text-navy-900 font-bold tracking-wide -rotate-1 inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-slate-200/80">
                ✨ Disfagia & Alimentação Segura com Dignidade no Lar
              </span>
            </div>

            {/* Sub-headline / Core Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              A Dra. Caren Stefany leva toda a estrutura médica até o seu lar para reabilitar a mastigação e deglutição, prevenir engasgos graves e tratar sequelas de <strong className="text-slate-900 font-semibold">AVC, Parkinson e Alzheimer</strong> sem o estresse de deslocamento.
            </p>

            {/* Feature Bullets in Light Liquid Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Prevenção de Broncoaspiração no Leito</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-sky-400" />
                </div>
                <span>Reabilitação da Deglutição na Mesa do Lar</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-rose-400" />
                </div>
                <span>Treinamento Presencial de Cuidadores</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Sessões no Conforto da Residência</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {onOpenTriagingModal ? (
                <button
                  onClick={() => onOpenTriagingModal('Hero Principal')}
                  className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer active:scale-[0.99]"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                  <span>Fazer Triagem Domiciliar (1 min)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a
                  href="#triagem"
                  className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                  <span>Fazer Triagem Domiciliar (1 min)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-6 py-4 rounded-2xl transition-all text-center border border-slate-200"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-600" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Bottom Clean Stats */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-display">100% Presencial</p>
                <p className="text-xs text-slate-500 font-medium">Reabilitação na sua residência</p>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <p className="text-xl sm:text-2xl font-bold text-emerald-600 font-display">Itatiba, Bragança & Morungaba</p>
                <p className="text-xs text-slate-500 font-medium">Atendimento domiciliar na região</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Doctor Card (Using real /dra-caren.webp photo) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/20 via-emerald-400/20 to-navy-700/20 rounded-3xl blur-2xl opacity-40 animate-pulse-slow" />
              
              <div className="relative bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl overflow-hidden">
                
                {/* Doctor Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 aspect-[4/5] flex items-center justify-center border border-slate-200">
                  
                  <img 
                    src="/dra-caren.webp" 
                    alt="Dra. Caren Stefany - Fonoaudióloga Especialista em Disfagia" 
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
                          Home Care
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

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
