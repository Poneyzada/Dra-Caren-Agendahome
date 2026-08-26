import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Home, Heart, ArrowRight, Activity, FileSpreadsheet, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriagingModal }) => {
  const whatsappUrl = "https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20fonoaudiol%C3%B3gica%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.";

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/30 text-slate-900 flex items-center">
      
      {/* LOOPING BACKGROUND VIDEO ACTIVE ON BOTH MOBILE & DESKTOP */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-20 mix-blend-multiply scale-100"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_082433_69699cf8-444b-4484-93cc-053e57896dfd.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Ambient Gradient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-gradient-to-tr from-sky-200/40 via-slate-100/50 to-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 md:space-y-6 text-left"
          >
            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-900 text-white text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Itatiba, Bragança Paulista & Morungaba</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Atendimento fonoaudiológico <span className="relative inline-block text-navy-900 underline decoration-emerald-400 decoration-4 underline-offset-4">na sua casa</span> para idosos com doenças neurológicas e disfagia.
            </h1>

            {/* Organic Vibe Badge */}
            <div className="inline-block relative">
              <span className="handwriting text-lg sm:text-2xl text-navy-900 font-bold tracking-wide inline-block bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xs border border-slate-200/80">
                ✨ Disfagia & Alimentação Segura no Lar
              </span>
            </div>

            {/* Core Description */}
            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              A Dra. Caren Stefany leva toda a estrutura médica até o seu lar para reabilitar a mastigação e deglutição, prevenir engasgos graves e tratar sequelas de <strong className="text-slate-900 font-semibold">AVC, Parkinson e Alzheimer</strong> sem o estresse de deslocamento.
            </p>

            {/* Feature Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Prevenção de Broncoaspiração</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span>Reabilitação da Deglutição</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Treinamento de Cuidadores</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Home className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Atendimento 100% Domiciliar</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {onOpenTriagingModal ? (
                <button
                  onClick={() => onOpenTriagingModal('Hero Principal')}
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold px-6 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all text-center cursor-pointer active:scale-[0.98]"
                >
                  <FileSpreadsheet className="w-5 h-5 shrink-0" />
                  <span>Fazer Triagem Domiciliar (1 min)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a
                  href="#triagem"
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold px-6 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all text-center"
                >
                  <FileSpreadsheet className="w-5 h-5 shrink-0" />
                  <span>Fazer Triagem Domiciliar (1 min)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-5 py-3 sm:py-4 rounded-xl transition-all text-center border border-slate-200"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-600" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-left">
                <p className="text-base sm:text-2xl font-bold text-slate-900 font-display">100% Presencial</p>
                <p className="text-[11px] text-slate-500 font-medium">Reabilitação na sua residência</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-left">
                <p className="text-base sm:text-2xl font-bold text-emerald-600 font-display">Itatiba & Região</p>
                <p className="text-[11px] text-slate-500 font-medium">Bragança e Morungaba</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Doctor Portrait Directly on Section Fold (Zero Box/Card Wrapper) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              
              {/* Soft Ambient Depth Glow behind portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/30 via-emerald-400/20 to-navy-900/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

              {/* Photo Portrait Directly on Section Fold */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full flex items-center justify-center shadow-2xl">
                
                <img 
                  src="/Dra-caren-hero1.webp" 
                  alt="Dra. Caren Stefany - Fonoaudióloga Especialista em Disfagia" 
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

                {/* Soft bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent pointer-events-none" />

                {/* Floating Glass Doctor Badge overlaying bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="glass-card-dark p-3 sm:p-3.5 rounded-2xl border border-white/20 shadow-2xl text-white backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-xs sm:text-sm text-white font-display">Dra. Caren Stefany</h3>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-sky-200 font-medium">Especialista em Disfagia e Neurofuncional</p>
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                        Home Care
                      </span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 text-slate-200">
                        <Home className="w-3 h-3 text-emerald-400" />
                        <span>Atendimento em Domicílio</span>
                      </span>
                      <span className="text-sky-300 font-semibold">(11) 993771-1353</span>
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
