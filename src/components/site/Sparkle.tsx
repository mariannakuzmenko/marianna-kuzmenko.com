interface SparkleProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Elegant four-point sparkle — replaces generic star icons.
 * Inherits `currentColor`, so it adapts to the soft blue / dusty rose palette.
 */
export const Sparkle = ({ size = 14, className = "", strokeWidth = 1.1 }: SparkleProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M12 1.8c.55 4.9 3.3 7.65 8.2 8.2-4.9.55-7.65 3.3-8.2 8.2-.55-4.9-3.3-7.65-8.2-8.2 4.9-.55 7.65-3.3 8.2-8.2Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <path
      d="M19.4 15.6c.24 2.1 1.42 3.28 3.52 3.52-2.1.24-3.28 1.42-3.52 3.52-.24-2.1-1.42-3.28-3.52-3.52 2.1-.24 3.28-1.42 3.52-3.52Z"
      fill="currentColor"
      fillOpacity="0.45"
    />
    <path d="M0 0h0" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

/** Refined line check — for value / benefit lists. */
export const SoftCheck = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <circle cx="12" cy="12" r="10.2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.1" />
    <path
      d="m7.8 12.4 2.9 2.9 5.6-6.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
