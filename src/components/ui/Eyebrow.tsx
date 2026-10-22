import { CrossIcon } from "./icons";

type EyebrowProps = {
  children: string;
  className?: string;
};

/** Section label: medical cross + uppercase tracked text in the accent orange. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`flex items-center gap-[clamp(10px,0.851vw,14.7px)] text-eyebrow text-accent uppercase ${className}`}>
      <CrossIcon className="size-[clamp(16px,1.24vw,21.43px)] shrink-0" />
      <span>{children}</span>
    </p>
  );
}
