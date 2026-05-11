import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingFeedback } from "./FloatingFeedback";
import { BreathingBackground } from "./BreathingBackground";
import { FloatingWords } from "./FloatingWords";
import { ScrollLine } from "./ScrollLine";
import { useReveal } from "@/hooks/useReveal";

export const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <div className="min-h-screen text-foreground relative">
      <BreathingBackground />
      <ScrollLine />
      <Nav />
      <main className="pt-20 md:pt-28">{children}</main>
      <FloatingFeedback />
      <Footer />
    </div>
  );
};
