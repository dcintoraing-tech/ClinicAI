import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("py-12 md:py-20 lg:py-24", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
