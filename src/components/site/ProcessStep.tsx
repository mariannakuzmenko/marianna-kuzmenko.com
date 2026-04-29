import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string;
  index?: number;
}

export const ProcessStep = ({ n, icon: Icon, title, desc, detail, index = 0 }: ProcessStepProps) => (
  <div
    className="reveal group relative card-soft cursor-default"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-500 group-hover:bg-rose-soft group-hover:rotate-6">
        <Icon className="text-foreground" size={26} strokeWidth={1.5} />
      </div>
      <span className="font-mono text-xs text-muted-foreground">{n}</span>
    </div>
    <h3 className="font-display text-2xl md:text-3xl mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
    <div className="mt-5 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700">
      <div className="pt-5 border-t border-border">
        <p className="text-sm text-foreground/80 italic font-display">{detail}</p>
      </div>
    </div>
  </div>
);
