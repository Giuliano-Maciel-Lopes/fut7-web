import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseAuth } from "@/hooks/context/useAuth";
import { useAsideAuth } from "@/hooks/context/useAuthaside";
useAsideAuth;

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
      loguin.open();
    }
  }, [session, router]);

  if (!session?.token) return null;

  return <>{children}</>;
}
