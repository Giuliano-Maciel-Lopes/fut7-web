import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseAuth } from "@/hooks/context/useAuth";
import { useAsideAuth } from "@/hooks/context/useAuthaside";
import { useState } from "react";


export function ProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { session , } = UseAuth();
  const { loguin } = useAsideAuth();

   const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
    // Se session é definido (pode ser null ou com token) // como esta de acordo com useauth no lacolstorage de auth 
    if (session !== undefined) {
      setIsLoaded(true);

      // Se não tiver token, redireciona
      if (!session?.token) {
        loguin.open();
        router.replace("/");
      }
    }
  }, [session, router, loguin]);

  // Enquanto session ainda não foi carregada do localStorage
  if (!isLoaded) return null;

  return <>{children}</>;
}
