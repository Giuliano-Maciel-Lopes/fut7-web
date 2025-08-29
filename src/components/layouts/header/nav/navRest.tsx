
import { ActiveLink } from "@/components/acticve-link/activelink";
import Link from "next/link";
export function NavRest() {
  return (
    <nav>
      <ActiveLink href={"/"}/>
      

    </nav>
  );
}