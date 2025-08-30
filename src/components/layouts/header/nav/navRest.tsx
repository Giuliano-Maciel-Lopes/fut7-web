import { Activelink } from "@/components/acticve-link";

export function NavRest() {
  const navLinks = [{ name: "Cartinha", href: "/letter" }];

  return (
    <nav>
      {navLinks.map((link) => (
        <Activelink.conatiner>
          <Activelink.content key={link.name} href={link.href}>
            {link.name}
          </Activelink.content>
        </Activelink.conatiner>
      ))}
    </nav>
  );
}
