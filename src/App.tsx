import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import UeberMich from "./pages/UeberMich.tsx";
import Webentwicklung from "./pages/Webentwicklung.tsx";
import SeoPage from "./pages/SeoPage.tsx";
import Projekte from "./pages/Projekte.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Preise from "./pages/Preise.tsx";
import Zertifikate from "./pages/Zertifikate.tsx";
import Faq from "./pages/Faq.tsx";
import ProjektAnfrage from "./pages/ProjektAnfrage.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Agb from "./pages/Agb.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Routes>
              {/* German (default) */}
              <Route path="/" element={<Index />} />
              <Route path="/ueber-mich" element={<UeberMich />} />
              <Route path="/webentwicklung" element={<Webentwicklung />} />
              <Route path="/seo" element={<SeoPage />} />
              <Route path="/projekte" element={<Projekte />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/preise" element={<Preise />} />
              <Route path="/zertifikate" element={<Zertifikate />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/projektanfrage" element={<ProjektAnfrage />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<Agb />} />

              {/* English */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/about" element={<UeberMich />} />
              <Route path="/en/web-development" element={<Webentwicklung />} />
              <Route path="/en/seo" element={<SeoPage />} />
              <Route path="/en/projects" element={<Projekte />} />
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogPost />} />
              <Route path="/en/pricing" element={<Preise />} />
              <Route path="/en/certificates" element={<Zertifikate />} />
              <Route path="/en/faq" element={<Faq />} />
              <Route path="/en/project-inquiry" element={<ProjektAnfrage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
