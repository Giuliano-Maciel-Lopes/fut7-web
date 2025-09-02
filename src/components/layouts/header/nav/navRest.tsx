import { Activelink } from "@/components/acticve-link";

export function NavRest() {
  const navLinks = [{ name: "Cartinha", href: "/letter" }];

  return (
    <nav>
      {navLinks.map((link) => (
        <Activelink.conatiner key={link.name}>
          <Activelink.content  href={link.href}>
            {link.name}
          </Activelink.content>
        </Activelink.conatiner>
      ))}
    </nav>
  );
}
