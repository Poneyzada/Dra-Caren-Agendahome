import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ClipboardCheck, ArrowLeft, MessageCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface TriagingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceTag?: string;
}

export const TriagingModal: React.FC<TriagingModalProps> = ({ isOpen, onClose, initialServiceTag }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "Qual a principal queixa ou sintoma do seu familiar ao se alimentar?",
      options: [
        { text: "Engasgos frequentes com água ou alimentos líquidos", isRisk: true },
        { text: "Dificuldade para mastigar ou alimento parado na boca", isRisk: true },
        { text: "Tosse contínua, pigarro ou voz molhada após comer", isRisk: true },
        { text: "Recusa alimentar ou medo de se engasgar", isRisk: true }
      ]
    },
    {
      id: 2,
      title: "O paciente possui algum diagnóstico médico neurológico?",
      options: [
        { text: "Sequela de AVC (Derrame)", isRisk: true },
        { text: "Doença de Parkinson", isRisk: true },
        { text: "Doença de Alzheimer ou Demência", isRisk: true },
        { text: "Idoso sem diagnóstico neurológico, apenas fraqueza/idade", isRisk: false }
      ]
    },
    {
      id: 3,
      title: "Em qual cidade será realizado o Atendimento Domiciliar?",
      options: [
        { text: "Itatiba e região", isRisk: false },
        { text: "Bragança Paulista e região", isRisk: false },
        { text: "Morungaba e região", isRisk: false },
        { text: "Outra cidade próxima", isRisk: false }
      ]
    }
  ];

  // Auto-advance upon clicking an option
  const handleSelectOption = (questionId: number, optionIdx: number) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: optionIdx };
    setSelectedAnswers(updatedAnswers);

    // Instant auto advance to next step or complete
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 180);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 180);
    }
  };

  const handlePrevStep = () => {
    if (isCompleted) {
      setIsCompleted(false);
      setCurrentStep(questions.length - 1);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  };

  const getStructuredWppMessage = () => {
    const serviceName = initialServiceTag || "Avaliação Fonoaudiológica Domiciliar";
    const q1Ans = questions[0].options[selectedAnswers[1]]?.text || "Não especificado";
    const q2Ans = questions[1].options[selectedAnswers[2]]?.text || "Não especificado";
    const q3Ans = questions[2].options[selectedAnswers[3]]?.text || "Não especificado";

    const text = `Ol%C3%A1%2C%20Dra.%20Caren!%20Fiz%20a%20triagem%20r%C3%A1pida%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%0A%0A📋%20*Ficha%20de%20Triagem%20do%20Paciente*%3A%0A•%20*Servi%C3%A7o*%3A%20${encodeURIComponent(serviceName)}%0A•%20*Sintoma%20Principal*%3A%20${encodeURIComponent(q1Ans)}%0A•%20*Condi%C3%A7%C3%A3o%20Neurol%C3%B3gica*%3A%20${encodeURIComponent(q2Ans)}%0A•%20*Cidade%20para%20Atendimento*%3A%20${encodeURIComponent(q3Ans)}%0A%0APoderia%20me%20passar%20as%20datas%20dispon%C3%ADveis%20para%20a%20visita%20domiciliar%3F`;

    return text;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
              <ClipboardCheck className="w-4 h-4 text-emerald-600" />
              <span>Triagem Domiciliar (Itatiba, Bragança & Morungaba)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Informações do Paciente para Agendamento
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Toque na opção desejada para avançar automaticamente e enviar para a Dra. Caren Stefany.
            </p>
          </div>

          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-300" 
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Box */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-700">
                    Pergunta {currentStep + 1} de {questions.length}
                  </span>
                  
                  {/* Back button */}
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-navy-900"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>
                  )}
                </div>

                <h4 className="font-bold text-base text-slate-900 mb-4 font-display">
                  {questions[currentStep].title}
                </h4>

                {/* Instant Tap Options List (No next button needed!) */}
                <div className="space-y-2.5">
                  {questions[currentStep].options.map((opt, idx) => {
                    const isSelected = selectedAnswers[questions[currentStep].id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(questions[currentStep].id, idx)}
                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                          isSelected
                            ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Skip to WhatsApp */}
              <div className="flex items-center justify-between pt-1">
                {currentStep > 0 ? (
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar para pergunta anterior</span>
                  </button>
                ) : (
                  <span />
                )}

                <a
                  href={`https://wa.me/55119937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-emerald-700 underline ml-auto"
                >
                  Ir direto ao WhatsApp ➔
                </a>
              </div>
            </div>
          ) : (
            /* Completed Result Box with WhatsApp Button */
            <div className="space-y-6 text-center py-2">
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-left text-emerald-950 space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 font-bold text-base text-emerald-900 font-display">
                    <ShieldAlert className="w-5 h-5 text-emerald-600" />
                    <span>Ficha de Triagem Concluída!</span>
                  </div>
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Editar respostas</span>
                  </button>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Sua ficha de atendimento domiciliar para a região de <strong>Itatiba, Bragança Paulista, Morungaba e arredores</strong> está pronta. Clique abaixo para enviá-la no WhatsApp da Dra. Caren Stefany.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`https://wa.me/55119937711353?text=${getStructuredWppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl text-sm transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Ficha para Dra. Caren no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 py-1"
                >
                  Reiniciar triagem do zero
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
