import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Heart, Stethoscope, ChevronRight, CheckCircle, FileSpreadsheet, Sparkles, Home } from 'lucide-react';

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
  const services: ServiceItem[] = [
    {
      id: 'disfagia-domiciliar',
      icon: <Activity className="w-6 h-6 text-navy-900" />,
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
      icon: <Stethoscope className="w-6 h-6 text-navy-900" />,
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
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
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
      icon: <Heart className="w-6 h-6 text-navy-900" />,
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

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5 text-emerald-600" />
            <span>Todos os Atendimentos São Realizados em Domicílio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Serviços fonoaudiológicos prestados <span className="text-navy-900 underline decoration-emerald-400 decoration-4">na sua casa</span>.
          </h2>
          
          <p className="text-base text-slate-600 font-normal">
            Atendimento presencial no lar em <strong className="text-slate-900 font-semibold">Itatiba, Bragança Paulista, Morungaba e região</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-navy-700 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <Home className="w-3 h-3 text-emerald-600" />
                    <span>{service.tag}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-1 group-hover:text-navy-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-800 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Opens Triaging Modal to qualify patient & location before Wpp */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenTriagingModal && onOpenTriagingModal(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md group-hover:shadow-lg cursor-pointer active:scale-[0.99]"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Fazer Triagem Domiciliar (1 min)</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Fluid Banner Callout */}
        <div className="mt-12 bg-navy-950 rounded-3xl p-8 sm:p-10 text-white border border-navy-800 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atendimento no Próprio Lar (Itatiba, Bragança & Morungaba)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Segurança, praticidade e reabilitação na rotina real da família.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Na clínica, o idoso fica tenso e fora da sua rotina. No <strong className="text-white">Atendimento Domiciliar</strong>, a Dra. Caren avalia a postura na cadeira que o paciente usa todos os dias, a textura das comidas que a família prepara e capacita quem cuida diretamente no lar.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenTriagingModal && onOpenTriagingModal('Triagem Domiciliar Geral')}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-lg text-center cursor-pointer active:scale-[0.99]"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Fazer Triagem Domiciliar (1 min)</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
