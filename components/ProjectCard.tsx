import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  name: string;
  summary: string;
  stack: string[];
  href: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full border-slate-800 bg-slate-900/60 transition-transform duration-200 hover:-translate-y-1">
      <CardContent className="space-y-5 p-6">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="text-base leading-7 text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-200"
            >
              {item}
            </span>
          ))}
        </div>

        <a href={project.href} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200">
          Conhecer projeto
          <ArrowRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}
