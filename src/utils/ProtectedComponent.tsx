import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseAuth } from "@/hooks/context/useAuth";
import { useAsideAuth } from "@/hooks/context/useAuthaside";


export function ProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { session } = UseAuth();
  const { loguin } = useAsideAuth();

  useEffect(() => {
    if (!session?.token) {
       loguin.open();       // abre o login
      router.replace("/"); // redireciona pra home
      
    }
  }, [session, router]);

  if (!session?.token) return null;

  return <>{children}</>;
}
