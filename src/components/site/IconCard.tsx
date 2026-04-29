import { LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index?: number;
  variant?: "default" | "blue" | "pink";
}

export const IconCard = ({ icon: Icon, title, desc, index = 0, variant = "default" }: IconCardProps) => {
  const bg = variant === "blue" ? "bg-secondary" : variant === "pink" ? "bg-rose-soft" : "bg-card";
  return (
    <div
      className={`reveal card-soft group ${bg} cursor-default`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-rotate-6">
        <Icon size={22} strokeWidth={1.5} className="text-foreground" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};
