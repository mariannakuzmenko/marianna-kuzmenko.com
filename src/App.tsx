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

              {/* English */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/about" element={<UeberMich />} />
              <Route path="/en/web-development" element={<Webentwicklung />} />
              <Route path="/en/seo" element={<SeoPage />} />
              <Route path="/en/projects" element={<Projekte />} />
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogPost />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
