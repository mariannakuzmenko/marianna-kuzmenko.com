interface FloatingNoteProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

export const FloatingNote = ({ children, className = "", rotate = -3 }: FloatingNoteProps) => (
  <div
    className={`sticky-note inline-block animate-float-slow ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);
