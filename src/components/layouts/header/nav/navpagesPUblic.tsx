import { Activelink } from "@/components/acticve-link";

type Props = {
  className?: string;
};

// Array de objetos com os links da navegação
const navPagesLinks = [
  { name: "Match", href: "/match" },

 
];

export function NavPublicMenu({ className }: Props) {
  return (
    <nav className={className}>
      {navPagesLinks.map((link) => (
        <div  key={link.name}>
          
          <Activelink.conatiner key={link.name} className="" >
           <Activelink.content  key={link.href} href={link.href}>{link.name}</Activelink.content>
          </Activelink.conatiner>

          
         

        </div>
      ))}
    </nav>
  );
}