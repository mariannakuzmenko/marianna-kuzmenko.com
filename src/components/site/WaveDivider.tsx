export const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div aria-hidden className={flip ? "wave-divider-up" : "wave-divider"} />
);
