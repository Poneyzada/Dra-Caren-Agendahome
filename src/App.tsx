import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AlertRibbon } from './components/AlertRibbon';
import { Services } from './components/Services';
import { HomeCareHighlight } from './components/HomeCareHighlight';
import { AboutDoctor } from './components/AboutDoctor';
import { CareProcess } from './components/CareProcess';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/mobile/MobileStickyBar';
import { Footer } from './components/Footer';
import { TriagingModal } from './components/TriagingModal';

export function App() {
  const [isTriagingModalOpen, setIsTriagingModalOpen] = useState(false);
  const [selectedServiceTag, setSelectedServiceTag] = useState<string | undefined>(undefined);

  const handleOpenTriagingModal = (serviceTitle?: string) => {
    setSelectedServiceTag(serviceTitle);
    setIsTriagingModalOpen(true);
  };

  const handleCloseTriagingModal = () => {
    setIsTriagingModalOpen(false);
    setSelectedServiceTag(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-navy-900 selection:text-white relative">
      {/* Fixed Navigation Header */}
      <Navbar onOpenTriagingModal={() => handleOpenTriagingModal()} />

      {/* Main Content */}
      <main>
        <Hero onOpenTriagingModal={handleOpenTriagingModal} />
        <AlertRibbon onOpenTriagingModal={handleOpenTriagingModal} />
        <Services onOpenTriagingModal={handleOpenTriagingModal} />
        <HomeCareHighlight onOpenTriagingModal={handleOpenTriagingModal} />
        <AboutDoctor onOpenTriagingModal={handleOpenTriagingModal} />
        <CareProcess onOpenTriagingModal={handleOpenTriagingModal} />
        <InteractiveChecklist />
        <FAQSection onOpenTriagingModal={handleOpenTriagingModal} />
      </main>

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Mobile First Fixed Bottom CTA Bar */}
      <MobileStickyBar onOpenTriagingModal={() => handleOpenTriagingModal()} />

      {/* Triaging Qualification Modal */}
      <TriagingModal
        isOpen={isTriagingModalOpen}
        onClose={handleCloseTriagingModal}
        initialServiceTag={selectedServiceTag}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
