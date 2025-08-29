import { Logo } from "@/components/logo";
import { ActiveLink, ActiveLinkBorder } from "@/components/acticve-link";

const footerLinks = [
  { name: "Termos de Uso", href: "/" },
  { name: "Política de Privacidade", href: "/" },
  { name: "Enviar Feedback", href: "/" },
];

export function Fotter() {
  return (
    <footer className=" bg-blue-800 w-full h-auto py-3 ">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex flex-col md:flex-row md:gap-4 gap-3 ">
          {footerLinks.map((link) => (
            <ActiveLink key={link.name} href={link.href}>
              {link.name}
            </ActiveLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
