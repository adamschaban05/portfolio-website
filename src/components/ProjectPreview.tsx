"use client";

interface Project {
  id: number;
  title: string;
  type: string;
  time: string;
  description: string;
  color: string;
  tags: string[];
}

interface ProjectPreviewProps {
  project: Project | null;
  label?: string;
}

export default function ProjectPreview({ project, label = "WORK" }: ProjectPreviewProps) {
  if (!project) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center px-12">
        <div className="w-px h-16 bg-charcoal/15 mb-6" />
        <p className="font-sans text-xs tracking-widest uppercase text-charcoal/25">
          hover a project
          <br />
          to preview
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-10 overflow-auto">
      <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/35 mb-8">
        {label} — {String(project.id).padStart(2, "0")}
      </p>

      {/* Mock visual */}
      <div
        className="rounded-xl flex-1 min-h-48 mb-8 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 left-6 right-6 h-px bg-charcoal" />
          <div className="absolute top-12 left-6 w-24 h-px bg-charcoal" />
          <div className="absolute bottom-6 left-6 right-6 h-px bg-charcoal" />
          <div className="absolute top-6 bottom-6 left-6 w-px bg-charcoal" />
        </div>
        <span className="font-serif text-5xl font-bold text-charcoal/20 relative z-10">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
        {project.title}
      </h3>
      <p className="font-sans text-sm text-charcoal/50 mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-[10px] tracking-widest uppercase border border-charcoal/15 rounded-full px-2.5 py-1 text-charcoal/45"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
