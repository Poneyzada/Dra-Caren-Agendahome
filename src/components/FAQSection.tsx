import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, FileSpreadsheet } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenTriagingModal?: (serviceTitle?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenTriagingModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "O atendimento fonoaudiológico é realizado exclusivamente em domicílio?",
      answer: "Sim! O foco da Dra. Caren Stefany é o Atendimento Domiciliar (Home Care) em Itatiba, Bragança Paulista, Morungaba e região. O tratamento ocorre no ambiente onde o paciente realmente se alimenta, trazendo total conforto para idosos com dificuldade de locomoção."
    },
    {
      question: "Quais regiões são atendidas em domicílio?",
      answer: "A Dra. Caren atende presencialmente em domicílio nas cidades de Itatiba, Bragança Paulista, Morungaba e municípios vizinhos mediante agendamento prévio."
    },
    {
      question: "Como sei se meu familiar idoso precisa de um Fonoaudiólogo especialista em Disfagia?",
      answer: "Se ele engasga com água, sucos ou alimentos, tossir com frequência durante ou após as refeições, fica com voz 'molhada' ou tem diagnóstico de Doença de Parkinson, Alzheimer ou AVC, a avaliação clínica de deglutição é indispensável."
    },
    {
      question: "O que é broncoaspiração e por que ela é tão perigosa?",
      answer: "A broncoaspiração ocorre quando líquidos ou alimentos entram na via aérea (pulmão) ao invés do estômago. Isso pode causar infecções graves como pneumonias aspirativas, exigindo internações hospitalares urgentes. A fonoaudiologia atua diretamente na prevenção desse risco."
    },
    {
      question: "Como funciona a orientação para cuidadores e familiares?",
      answer: "Durante a visita domiciliar, a Dra. Caren orienta detalhadamente quem prepara a comida e quem auxilia o idoso. São ensinadas técnicas de posicionamento da cabeça, adaptação da consistência dos alimentos, uso de espessantes e o que fazer em emergências."
    },
    {
      question: "Quais são as formas de atendimento e emissão de nota para reembolso?",
      answer: "O atendimento é realizado em formato particular com emissão de nota fiscal/recibo de Fonoaudiologia, que pode ser utilizado para solicitação de reembolso no seu plano de saúde ou dedução no Imposto de Renda."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes de Cuidadores e Familiares
          </h2>

          <p className="text-sm text-slate-600">
            Respostas transparentes sobre o atendimento fonoaudiológico domiciliar em Itatiba, Bragança Paulista e Morungaba.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base font-display hover:text-navy-900 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-navy-900 text-white' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h3 className="font-bold text-lg text-slate-900 font-display">
            Ainda tem alguma dúvida específica sobre o caso do seu familiar?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Faça a triagem prévia em 1 minuto. Assim que concluída, a Dra. Caren recebe todas as especificações e responde suas dúvidas no WhatsApp.
          </p>
          <div>
            <button
              onClick={() => onOpenTriagingModal && onOpenTriagingModal('Tirar Dúvida FAQ')}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer active:scale-[0.99]"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Fazer Triagem & Tirar Dúvida (1 min)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
