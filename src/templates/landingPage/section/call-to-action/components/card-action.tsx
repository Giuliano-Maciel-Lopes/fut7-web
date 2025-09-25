import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  children: React.ReactNode;
  link?: string;
  className?: string;
  label?: string; // texto do botão custom
};

export function CardAction({ title, children, link, className, label }: Props) {
  const isExternal =
    link && (link.startsWith("http") || link.startsWith("www"));

  // Define automaticamente o label se não vier via prop
  const defaultLabel = (() => {
    if (!link) return "Inscrever-se";
    if (link === "/inscricao") return "Inscrever-se";
    if (link === "/detalhes") return "Detalhes do evento";
    return "fale com um atendente";
  })();

  return (
    <div
      className={`flex flex-col p-6 rounded-xl md:bg-white bg-blue-400 md:text-black ${className}`}
    >
     
      <div className="bg-green-400 rounded-full p-2 max-w-max mb-4">
        <p className="text-sm text-white">{title}</p>
      </div>

      {/* Conteúdo */}
      <div className="mb-6">{children}</div>

      {/* Botão */}
      <div className="flex justify-end">
        {link ? (
          isExternal ? (
            <Button variant={"secundary"} asChild>
              <a
                href={link.startsWith("http") ? link : `https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label || defaultLabel}
              </a>
            </Button>
          ) : (
            <Button   variant={"secundary"}asChild>
              <Link href={link}>{label || defaultLabel}</Link>
            </Button>
          )
        ) : (
          <Button variant={"secundary"} asChild>
            <Link href="/inscricao">{label || defaultLabel}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
