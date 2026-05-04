import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingFeedback } from "./FloatingFeedback";
import { BreathingBackground } from "./BreathingBackground";
import { ScrollLine } from "./ScrollLine";
import { useReveal } from "@/hooks/useReveal";

export const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BreathingBackground />
      <ScrollLine />
      <Nav />
      <main className="pt-16 md:pt-20">{children}</main>
      <FloatingFeedback />
      <Footer />
    </div>
  );
};
