import { Activelink } from "@/components/acticve-link";



export function NavPlayers() {

  
  const navLinks = [
    { name: "Cartinha", href: "/letter" },
    { name: "Meu Time ", href: "/team" },
    { name: "convites", href: "/invite" }

  ];



  return (
    <nav className="gap-2 flex flex-col">
      {navLinks.map((link) => (
      <Activelink.conatiner key={link.href}>
          <Activelink.content  href={`/player${link.href}`}>
            {link.name}
          </Activelink.content>
        </Activelink.conatiner>
      ))}
    </nav>
  );
}
