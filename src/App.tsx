import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeAreaDetail from "./pages/PracticeAreaDetail";
import Attorneys from "./pages/Attorneys";
import AttorneyProfile from "./pages/AttorneyProfile";
import Results from "./pages/Results";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/attorneys/:slug" element={<AttorneyProfile />} />
          <Route path="/results" element={<Results />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
