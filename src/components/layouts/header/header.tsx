import { useAsideAuth } from "@/hooks/context/useAuthaside";
import { HeaderContainer } from "./components/container";
import { HeaderLogged } from "./components/logout";
import { HeaderPublic } from "./components/public";
import { useRouter } from "next/router";



type Props ={
 
  role?: "PLAYER" | "ADMIN";
}

export function Header({role}:Props) {
  const { loguin } = useAsideAuth();
  
  const router = useRouter()
  const isLoggedRoute = router.pathname.startsWith("/player") || router.pathname.startsWith("/admin");
  const isPlayer = router.pathname.startsWith("/player");

  return (
    <header className="bg-blue-800 w-full text-md h-20 md:h-24 flex items-center fixed z-50 border-b-2 border-gray-400">
      <HeaderContainer>
        {isLoggedRoute? <HeaderLogged isPlayer={isPlayer} /> : <HeaderPublic loguin={loguin.open} />}
      </HeaderContainer>
    </header>
  );
}
