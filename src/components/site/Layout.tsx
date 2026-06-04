import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";
import { BreathingBackground } from "./BreathingBackground";
import { ScrollLine } from "./ScrollLine";
import { useReveal } from "@/hooks/useReveal";

export const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <div className="min-h-screen text-foreground relative">
      <BreathingBackground />
      <ScrollLine />
      <div className="relative z-10">
        <Nav />
        <main className="pt-20 md:pt-28">{children}</main>
        <StickyCta />
        <Footer />
      </div>
    </div>
  );
};
