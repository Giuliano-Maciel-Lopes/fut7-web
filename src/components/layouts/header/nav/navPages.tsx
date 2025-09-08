import { Activelink } from "@/components/acticve-link";

type Props = {
  className?: string;
};

// Array de objetos com os links da navegação
const navPagesLinks = [
  { name: "Início", href: "/" },
  { name: "Times Confirmados", href: "/teamConfirmed" },
  { name: "Jogadores", href: "/players" },
  { name: "Inscrição", href: "/" },
 
];

export function NavPages({ className }: Props) {
  return (
    <nav className={className}>
      {navPagesLinks.map((link) => (
        <div  key={link.name}>
          
          <Activelink.conatiner key={link.name} className="md:hidden" >
           <Activelink.content  key={link.href} href={link.href}>{link.name}</Activelink.content>
          </Activelink.conatiner>

          
          <div className="hidden md:block">
            <Activelink.content key={link.href} href={link.href}>{link.name}</Activelink.content>
          </div>

        </div>
      ))}
    </nav>
  );
}