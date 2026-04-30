interface WhisperProps {
  children: React.ReactNode;
  className?: string;
}

export const Whisper = ({ children, className = "" }: WhisperProps) => (
  <span className={`whisper ${className}`} aria-hidden="true">
    {children}
  </span>
);
