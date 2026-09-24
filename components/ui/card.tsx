import type { HTMLAttributes } from "react";
import { cn } from "cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.35)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-content" className={cn("p-6", className)} {...props} />;
}
