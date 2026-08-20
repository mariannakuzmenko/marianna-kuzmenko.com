import { Project } from "@/data/projects";

interface ProjectImageProps {
  project: Project;
  className?: string;
  imgClassName?: string;
  /** Loading strategy — use "eager" for above-the-fold visuals. */
  loading?: "lazy" | "eager";
}

/**
 * Single rendering path for every project visual across the site.
 * Uses the image defined in `src/data/projects.ts` — never a substitute.
 * If a project's image is still pending upload, an elegant typographic
 * placeholder is shown instead of an unrelated screenshot.
 */
export const ProjectImage = ({
  project,
  className = "",
  imgClassName = "",
  loading = "lazy",
}: ProjectImageProps) => {
  if (!project.image || project.imagePending) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-border ${className}`}
        style={{ background: "var(--gradient-sky)", minHeight: "16rem" }}
        role="img"
        aria-label={project.altText}
      >
        <div className="text-center px-8">
          <p className="eyebrow mb-3">{project.category}</p>
          <p className="font-display text-2xl md:text-3xl leading-tight">{project.name}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.altText}
      loading={loading}
      decoding="async"
      className={`w-full h-full object-contain ${imgClassName} ${className}`}
    />
  );
};
