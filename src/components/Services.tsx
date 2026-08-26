import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Heart, Stethoscope, ChevronLeft, ChevronRight, CheckCircle, FileSpreadsheet, Home } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

interface ServicesProps {
  onOpenTriagingModal?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenTriagingModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      id: 'disfagia-domiciliar',
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      tag: 'Atendimento Domiciliar',
      title: 'Tratamento de Disfagia em Domicílio',
      subtitle: 'Reabilitação da deglutição de líquidos, sólidos e pastosos na mesa da sua casa',
      description: 'Avaliação clínica minuciosa no lar para identificar as causas da dificuldade de engolir, fortalecendo a musculatura orofacial no ambiente real de refeição do idoso.',
      highlights: [
        'Exercícios de fortalecimento de língua e bochechas no lar',
        'Manobras facilitadoras para proteção da via aérea',
        'Ajuste de consistências com alimentos da rotina da casa',
        'Redução imediata do desconforto ao engolir'
      ]
    },
    {
      id: 'neurologia-domiciliar',
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      tag: 'Atendimento Domiciliar',
      title: 'Fonoaudiologia Neurofuncional no Lar',
      subtitle: 'Reabilitação pós-AVC, Parkinson, Alzheimer e Demências na residência',
      description: 'Tratamento fonoaudiológico focado nas sequelas motoras e sensoriais provocadas por condições neurológicas, sem o estresse e risco de viagens a clínicas.',
      highlights: [
        'Estímulos sensoriais e motores adaptados à rotina do lar',
        'Reabilitação da mastigação e controle salivar',
        'Manutenção da funcionalidade oral no Parkinson e Alzheimer',
        'Acompanhamento contínuo no ambiente do paciente'
      ]
    },
    {
      id: 'broncoaspiracao-domiciliar',
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      tag: 'Segurança no Lar',
      title: 'Prevenção de Broncoaspiração no Leito / Mesa',
      subtitle: 'Proteção efetiva contra pneumonias aspirativas no conforto da casa',
      description: 'Estratégias clínicas aplicadas no próprio leito ou mesa de jantar para evitar que resíduos alimentares ou saliva entrem nos pulmões, prevenindo internações.',
      highlights: [
        'Identificação de sinais de aspiração silenciosa no lar',
        'Técnicas de posicionamento correto na cadeira/leito',
        'Protocolo de higienização oral preventiva presencial',
        'Testes de deglutição à beira do leito'
      ]
    },
    {
      id: 'alimentacao-segura-domiciliar',
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      tag: 'Capacitação na Cozinha do Lar',
      title: 'Orientação de Alimentação Segura para Cuidadores',
      subtitle: 'Capacitação presencial na cozinha da família para quem cuida do idoso',
      description: 'Treinamento prático e humanizado na própria cozinha da residência para que a equipe de cuidadores e familiares aprendam a preparar e ofertar cada refeição.',
      highlights: [
        'Treinamento prático de adaptação de texturas de alimentos',
        'Uso correto e dosagem de espessantes alimentares',
        'Ritmo de oferta e utensílios mais adequados na rotina',
        'O que fazer em episódios de engasgo no dia a dia'
      ]
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="servicos" className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header - Espaçamento Reduzido e Compacto em Cima */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-[11px] font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5 text-emerald-700" />
            <span>Todos os Atendimentos São Realizados em Domicílio</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 tracking-tight">
            Serviços fonoaudiológicos prestados <span className="text-navy-950 underline decoration-emerald-400 decoration-4">na sua casa</span>.
          </h2>
          
          <p className="text-xs sm:text-base text-slate-700 font-medium">
            Atendimento presencial no lar em <strong className="text-navy-950 font-bold">Itatiba, Bragança Paulista, Morungaba e região</strong>.
          </p>
        </div>

        {/* 📱 CARROSSEL 3D COVERFLOW COM CONTROLES */}
        <div className="relative max-w-2xl mx-auto">
          
          {/* Container dos Cards - Altura Compacta */}
          <div className="relative min-h-[510px] sm:min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {services.map((service, index) => {
                const offset = index - currentIndex;
                const isActive = offset === 0;
                const isLeft = offset === -1 || (currentIndex === 0 && index === services.length - 1);
                const isRight = offset === 1 || (currentIndex === services.length - 1 && index === 0);

                const isVisible = isActive || isLeft || isRight;
                if (!isVisible) return null;

                let xPos = 0;
                if (isLeft) xPos = -65;
                if (isRight) xPos = 65;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.85, x: xPos * 1.4 }}
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      scale: isActive ? 1 : 0.88,
                      x: `${xPos}%`,
                      zIndex: isActive ? 30 : 10,
                      rotateY: isLeft ? 6 : isRight ? -6 : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: xPos * 1.4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, { offset: dragOffset, velocity }) => {
                      const swipe = Math.abs(dragOffset.x) * velocity.x;
                      if (swipe < -80 || dragOffset.x < -50) {
                        nextSlide();
                      } else if (swipe > 80 || dragOffset.x > 50) {
                        prevSlide();
                      }
                    }}
                    onClick={() => {
                      if (isLeft) prevSlide();
                      if (isRight) nextSlide();
                    }}
                    className={`absolute w-full max-w-[92%] sm:max-w-lg cursor-pointer ${
                      isActive ? 'cursor-default' : 'hover:opacity-60 transition-opacity'
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xl space-y-3 sm:space-y-4 text-left">
                      
                      {/* Top Header Card: Icon + Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                          {service.icon}
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-950 border border-emerald-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                          <Home className="w-3 h-3 text-emerald-700" />
                          <span>{service.tag}</span>
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold font-display text-navy-950 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs text-emerald-800 font-bold mt-0.5 sm:mt-1">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {service.description}
                      </p>

                      {/* Highlights Checkmark List */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 sm:space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-900 font-medium leading-tight">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-1.5 sm:pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenTriagingModal && onOpenTriagingModal(service.title);
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 sm:py-3.5 rounded-xl shadow-md hover:shadow-emerald-600/20 transition-all cursor-pointer active:scale-[0.99]"
                        >
                          <FileSpreadsheet className="w-4 h-4" />
                          <span>Fazer Triagem Domiciliar (1 min)</span>
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* 🔢 NÚMERO GRANDE + CONTADOR - ESPAÇO SÓ UM POUCO DE NADA ENTRE O CARD E O NÚMERO */}
          <div className="text-center mt-2.5 sm:mt-3 space-y-0.5">
            <div className="text-3xl sm:text-4xl font-black text-navy-950 font-display tracking-tight leading-none">
              {String(currentIndex + 1).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              DE {String(services.length).padStart(2, '0')}
            </div>
          </div>

          {/* 🕹️ DOCK DE NAVEGAÇÃO: SETAS + BOLINHAS COM PÍLULA ATIVA */}
          <div className="flex justify-center mt-2.5 sm:mt-3">
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/90 shadow-md">
              
              {/* Botão Anterior */}
              <button
                onClick={prevSlide}
                aria-label="Serviço anterior"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Bolinhas de Paginação com Pílula Ativa */}
              <div className="flex items-center gap-1.5 px-1.5">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para serviço ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 h-2 bg-emerald-600'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Botão Próximo */}
              <button
                onClick={nextSlide}
                aria-label="Próximo serviço"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
