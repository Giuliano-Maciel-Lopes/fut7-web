import { useAsideAuth } from "@/hooks/context/useAuthaside";
import { HeaderContainer } from "./components/container";
import { HeaderLogged } from "./components/logout";
import { HeaderPublic } from "./components/public";
import { UseAuth } from "@/hooks/context/useAuth";

export function Header() {
  const { loguin } = useAsideAuth();
  const { session } = UseAuth();
  const user = session?.datauser.role;

  return (
    <header className="bg-blue-800 w-full text-md h-20 md:h-24 flex items-center fixed z-50 border-b-2 border-gray-400">
      <HeaderContainer>
        {user ? <HeaderLogged /> : <HeaderPublic loguin={loguin.open} />}
      </HeaderContainer>
    </header>
  );
}
