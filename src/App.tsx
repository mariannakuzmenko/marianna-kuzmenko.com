import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ConsentProvider } from "@/consent/ConsentContext";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { CookieBanner } from "@/components/site/CookieBanner";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import Index from "./pages/Index.tsx";
import UeberMich from "./pages/UeberMich.tsx";
import Webentwicklung from "./pages/Webentwicklung.tsx";
import SeoPage from "./pages/SeoPage.tsx";
import Projekte from "./pages/Projekte.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
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
import CookieRichtlinie from "./pages/CookieRichtlinie.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        {/* German (default) */}
        <Route path="/" element={<Index />} />
        <Route path="/ueber-mich" element={<UeberMich />} />
        <Route path="/webentwicklung" element={<Webentwicklung />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/projekte/:slug" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/zertifikate" element={<Zertifikate />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/projektanfrage" element={<ProjektAnfrage />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/en/cookie-policy" element={<CookieRichtlinie />} />
        <Route path="/en/disclaimer" element={<Disclaimer />} />

        {/* English */}
        <Route path="/en" element={<Index />} />
        <Route path="/en/about" element={<UeberMich />} />
        <Route path="/en/web-development" element={<Webentwicklung />} />
        <Route path="/en/seo" element={<SeoPage />} />
        <Route path="/en/projects" element={<Projekte />} />
        <Route path="/en/projects/:slug" element={<CaseStudy />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/en/blog/:slug" element={<BlogPost />} />
        <Route path="/en/pricing" element={<Preise />} />
        <Route path="/en/certificates" element={<Zertifikate />} />
        <Route path="/en/faq" element={<Faq />} />
        <Route path="/en/project-inquiry" element={<ProjektAnfrage />} />
        <Route path="/en/contact" element={<Kontakt />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <ConsentProvider>
              <ScrollToTop />
              <GoogleAnalytics />
              <AppRoutes />
              <CookieBanner />
            </ConsentProvider>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
