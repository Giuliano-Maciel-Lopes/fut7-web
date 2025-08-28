import { createContext } from "react";
import { useToggle } from "@/hooks/usetoggle";

type AuthAside = {
  loguin: ReturnType<typeof useToggle>;
  register: ReturnType<typeof useToggle>;
};

export const AuthAsideContext = createContext({} as AuthAside);

export function AsideAuthProvider({ children }: { children: React.ReactNode }) {
  const loguin = useToggle();
  const register = useToggle();

  return (
    <AuthAsideContext.Provider value={{ loguin, register }}>
      {children}
    </AuthAsideContext.Provider>
  );
}
