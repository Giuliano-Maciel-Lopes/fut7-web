import { ActiveLink, ActiveLinkBorder } from "@/components/acticve-link";

type Props = {
  className?: string;
};

// Array de objetos com os links da navegação
const navPagesLinks = [
  { name: "Início", href: "/" },
  { name: "Times Confirmados", href: "/teamConfirmed" },
  { name: "Classificação", href: "/classificacao" },
  { name: "Inscrição", href: "/" },
];

export function NavPages({ className }: Props) {
  return (
    <nav className={className}>
      {navPagesLinks.map((link) => (
        <div key={link.name}>
          
          <ActiveLinkBorder className="md:hidden">
            <ActiveLink href={link.href}>{link.name}</ActiveLink>
          </ActiveLinkBorder>

          
          <div className="hidden md:block">
            <ActiveLink href={link.href}>{link.name}</ActiveLink>
          </div>

        </div>
      ))}
    </nav>
  );
}