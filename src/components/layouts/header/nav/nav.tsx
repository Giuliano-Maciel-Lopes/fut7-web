import { ActiveLink } from "@/components/acticve-link/activelink";

type Props ={
    className:string
}
export function NavHeader({className}:Props) {
  return (
    <nav className={className}>
      <ActiveLink href={"/"}>Início</ActiveLink>
      <ActiveLink href={"/teamConfirmed"}>Times confirmados</ActiveLink>
      <ActiveLink href={""}>classificaçao</ActiveLink>
      <ActiveLink href={"/"}>Inscriçao</ActiveLink>
      <ActiveLink href={"/"}>contato</ActiveLink>
    </nav>
  );
}
