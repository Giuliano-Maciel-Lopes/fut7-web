import { Logo } from "@/components/logo";
import { ActiveLink } from "@/components/acticve-link/activelink";

export function Fotter() {
  return (
    <footer className=" bg-blue-800 w-full h-auto py-3 ">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex flex-col md:flex-row md:gap-4 gap-3 ">
          <ActiveLink href="/">Termos de Uso</ActiveLink>
          <ActiveLink href="/">Politica de Privacidade</ActiveLink>
          <ActiveLink href="/">Enviar feedback</ActiveLink>
        </div>
      </div>
    </footer>
  );
}
