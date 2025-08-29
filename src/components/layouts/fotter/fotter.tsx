import { Logo } from "@/components/logo";
import { Activelink } from "@/components/acticve-link";

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
            <Activelink.content key={link.name} href={link.href}>
              {link.name}
            </Activelink.content>
          ))}
        </div>
      </div>
    </footer>
  );
}
