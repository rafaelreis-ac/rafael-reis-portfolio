type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm font-medium text-slate-200 shadow-sm transition hover:border-sky-400 hover:text-sky-300">
      {label}
    </span>
  );
}
