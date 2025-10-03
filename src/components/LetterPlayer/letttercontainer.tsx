import Link from "next/link";
import { sizes } from "./size";

type PlayerCardContainerProps = {
  size?: "md" | "lg" | "sm" | "md2";
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
  href?: string;
};

export function PlayerletterContainer({
  size = "md",
  className,
  children,
  onclick,
  href,
}: PlayerCardContainerProps) {
  const s = sizes[size];

  const content = (
    <div
      onClick={onclick}
      className={`relative ${s.w} ${s.h} shadow-xl border-4 border-yellow-200 overflow-hidden flex flex-col items-center
      bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 clip-card ${className}`}
    >
      {children}
    </div>
  );

  // Se houver href, envolvemos o content com Link
  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <>{content}</>;
}
