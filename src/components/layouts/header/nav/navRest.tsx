import { Activelink } from "@/components/acticve-link";
import { UseAuth } from "@/hooks/context/useAuth";


export function NavRest() {
  const {session} = UseAuth()
  const role = session?.datauser.role.toLowerCase()
  
  const navLinks = [
    { name: "Cartinha", href: "/letter" },
    { name: "Meu Time ", href: "/team" },
    { name: "Jogadores", href: "/letter" },
    { name: "convites", href: "/invite" }

  ];

if (!session?.datauser) return null; // usuário não logado, não mostra nada // mas para frente trabalhar 
// aqui para usauarios nao logados

  return (
    <nav className="gap-2 flex flex-col">
      {navLinks.map((link) => (
      <Activelink.conatiner key={link.href}>
          <Activelink.content  href={`/${role}${link.href}`}>
            {link.name}
          </Activelink.content>
        </Activelink.conatiner>
      ))}
    </nav>
  );
}
