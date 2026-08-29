import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Square, RotateCcw, MessageCircle, ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  options: { text: string; isRisk: boolean }[];
}

export const InteractiveChecklist: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      title: "Com que frequência o seu familiar engasga ao beber líquidos ou comer?",
      options: [
        { text: "Frequente (quase todas as refeições)", isRisk: true },
        { text: "Ocasional (algumas vezes por semana)", isRisk: true },
        { text: "Raro ou nunca engasga", isRisk: false }
      ]
    },
    {
      id: 2,
      title: "O paciente possui histórico ou diagnóstico de doença neurológica?",
      options: [
        { text: "Sim (AVC, Parkinson, Alzheimer, ELA ou Demência)", isRisk: true },
        { text: "Em investigação médica", isRisk: true },
        { text: "Não possui doença neurológica", isRisk: false }
      ]
    },
    {
      id: 3,
      title: "Qual a cidade de atendimento domiciliar do seu familiar?",
      options: [
        { text: "Itatiba e região", isRisk: false },
        { text: "Bragança Paulista e região", isRisk: false },
        { text: "Morungaba e região", isRisk: false },
        { text: "Outra cidade próxima", isRisk: false }
      ]
    }
  ];

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: optionIdx };
    setSelectedAnswers(updatedAnswers);

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

  const riskCount = Object.keys(selectedAnswers).reduce((acc, qIdStr) => {
    const qId = Number(qIdStr);
    const ansIdx = selectedAnswers[qId];
    const question = questions.find(q => q.id === qId);
    if (question && question.options[ansIdx]?.isRisk) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const getWppSummaryMessage = () => {
    const summary = questions.map(q => {
      const ansIdx = selectedAnswers[q.id];
      const ansText = q.options[ansIdx]?.text || 'Não respondido';
      return `• ${q.title}: ${ansText}`;
    }).join('%0A');

    return `Ol%C3%A1%2C%20Dra.%20Caren!%20Fiz%20a%20triagem%20r%C3%A1pida%20no%20site%20para%20Atendimento%20Domiciliar.%0A%0A📋%20*Resumo%20da%20Triagem%20do%20Paciente*%3A%0A${summary}%0A%0AGostaria%20de%20agendar%20uma%20visita%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba.`;
  };

  return (
    <section id="triagem" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-navy-950 text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <ClipboardCheck className="w-4 h-4 text-emerald-600" />
              <span>Triagem Rápida (Itatiba, Bragança & Morungaba)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Seu familiar precisa de avaliação fonoaudiológica em domicílio?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Toque nas opções para avançar automaticamente e enviar o resultado no WhatsApp da Dra. Caren Stefany.
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
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-700">
                    Pergunta {currentStep + 1} de {questions.length}
                  </span>

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

                <h3 className="font-bold text-lg text-slate-900 mb-5 font-display">
                  {questions[currentStep].title}
                </h3>

                {/* Instant Tap Options List */}
                <div className="space-y-3">
                  {questions[currentStep].options.map((opt, idx) => {
                    const isSelected = selectedAnswers[questions[currentStep].id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(questions[currentStep].id, idx)}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                          isSelected
                            ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {isSelected ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Navigation Row */}
              <div className="flex items-center justify-between pt-2">
                {currentStep > 0 ? (
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy-900"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar para pergunta anterior</span>
                  </button>
                ) : (
                  <span />
                )}

                <a
                  href="https://wa.me/5511937711353?text=Ol%C3%A1%2C%20Dra.%20Caren!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar%20em%20Itatiba%2FBragan%C3%A7a%2FMorungaba."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-emerald-700 underline"
                >
                  Ir direto ao WhatsApp ➔
                </a>
              </div>
            </div>
          ) : (
            /* Result Box */
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center">
              
              <div className={`p-6 rounded-2xl border text-left ${
                riskCount > 0 
                  ? 'bg-rose-50 border-rose-200 text-rose-950' 
                  : 'bg-emerald-50 border-emerald-200 text-emerald-950'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className={`w-7 h-7 ${riskCount > 0 ? 'text-rose-600' : 'text-emerald-600'}`} />
                    <h3 className="font-bold text-xl font-display">
                      {riskCount > 0 
                        ? "Recomendada Avaliação Domiciliar Urgente" 
                        : "Resultado: Baixo Risco Imediato"}
                    </h3>
                  </div>
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Editar respostas</span>
                  </button>
                </div>

                <p className="text-sm leading-relaxed">
                  {riskCount > 0 
                    ? "Identificamos indicativos de risco para a deglutição (Disfagia) e engasgos. O Atendimento Domiciliar da Dra. Caren Stefany em Itatiba, Bragança Paulista ou Morungaba é altamente recomendado."
                    : "Sua ficha está pronta para ser enviada diretamente à Dra. Caren Stefany para consulta de horários e agendamento da visita domiciliar."}
                </p>
              </div>

              {/* Send Result Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/5511937711353?text=${getWppSummaryMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Resultado para Dra. Caren no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 py-2 px-4 rounded-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer Teste</span>
                </button>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

