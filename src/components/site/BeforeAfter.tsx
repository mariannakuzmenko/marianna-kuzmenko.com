import { useRef, useState, MouseEvent, TouchEvent } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export const BeforeAfter = ({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterProps) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  const onMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onTouchMove = (e: TouchEvent) => {
    updateFromClientX(e.touches[0].clientX);
  };

  return (
    <div
      ref={ref}
      className="frame-soft relative aspect-[16/10] select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onMouseMove={onMove}
      onTouchMove={onTouchMove}
    >
      <img src={afterSrc} alt={afterAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
        <span className="absolute top-4 left-4 chip-pink !bg-paper/90">Vorher</span>
      </div>
      <span className="absolute top-4 right-4 chip !bg-paper/90">Nachher</span>

      <div
        className="absolute top-0 bottom-0 w-px bg-paper shadow-[0_0_20px_rgba(0,0,0,0.15)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-paper shadow-pink flex items-center justify-center">
          <span className="text-xs font-mono">↔</span>
        </div>
      </div>
    </div>
  );
};
