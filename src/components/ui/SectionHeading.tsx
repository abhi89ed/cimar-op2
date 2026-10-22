import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** H2 used by every section title (Outfit 600, 47px at the canvas, Title Case via CSS). */
export function SectionHeading({ id, children, className = "" }: SectionHeadingProps) {
  return (
    <h2 id={id} className={`text-h2 text-ink capitalize ${className}`}>
      {children}
    </h2>
  );
}
