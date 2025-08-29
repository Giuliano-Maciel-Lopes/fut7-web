import { ActiveLink, ActiveLinkBorder } from "@/components/acticve-link";

export function NavRest() {
  const navLinks = [{ name: "Cartinha", href: "/" }];

  return (
    <nav>
      {navLinks.map((link) => (
        <ActiveLinkBorder>
          <ActiveLink key={link.name} href={link.href}>
            {link.name}
          </ActiveLink>
        </ActiveLinkBorder>
      ))}
    </nav>
  );
}
