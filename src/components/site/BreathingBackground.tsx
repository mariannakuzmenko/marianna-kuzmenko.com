/**
 * Soft cinematic atmospheric background.
 * Minimal, calm — only gradient haze and soft glow layers.
 * No architecture, no clouds, no particles. Stays out of the way.
 */
export const BreathingBackground = () => {
  return (
    <div className="sky-bg" aria-hidden="true">
      <div className="sky-base" />
      <div className="sky-glow sky-glow-1" />
      <div className="sky-glow sky-glow-2" />
      <div className="sky-glow sky-glow-3" />
      <div className="sky-haze" />
    </div>
  );
};
