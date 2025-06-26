
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScreeningFeature from "./pages/features/ScreeningFeature";
import InterviewsFeature from "./pages/features/InterviewsFeature";
import WhatsAppFeature from "./pages/features/WhatsAppFeature";
import DocsIndex from "./pages/docs/DocsIndex";
import CandidateGuide from "./pages/docs/CandidateGuide";
import RecruiterGuide from "./pages/docs/RecruiterGuide";
import EmailTemplates from "./pages/docs/EmailTemplates";
import DPAPage from "./pages/DPAPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/screening" element={<ScreeningFeature />} />
          <Route path="/features/interviews" element={<InterviewsFeature />} />
          <Route path="/features/whatsapp" element={<WhatsAppFeature />} />
          <Route path="/docs" element={<DocsIndex />} />
          <Route path="/docs/candidate" element={<CandidateGuide />} />
          <Route path="/docs/recruiter" element={<RecruiterGuide />} />
          <Route path="/docs/recruiter/email-templates" element={<EmailTemplates />} />
          <Route path="/dpa" element={<DPAPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
