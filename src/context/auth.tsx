import React, { createContext, useEffect, useState } from "react";
import { api } from "@/services/axios";
import { AuthResponse } from "@/types/auth";
import Cookies from "js-cookie";

type AuthContextType = {
  session: null | AuthResponse;
  save: (data: AuthResponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@Refund";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | AuthResponse>(null);

  function save(data: AuthResponse) {
    setSession(data);

    Cookies.set("datauser", JSON.stringify(data.datauser), { expires: 1 }); // expira emz
  }

  function remove() {
   
    Cookies.remove("datauser");
    setSession(null);
    window.location.assign("/");
  }
  function loaduser() {
    const datauser = Cookies.get("datauser");

    if (datauser) {
      setSession({
        datauser: JSON.parse(datauser),
      });
    }
  }

  useEffect(() => {
    loaduser();

    // Interceptor para deslogar no 401
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
         
        }
        return Promise.reject(error);
      }
    );

    // Remove interceptor quando o AuthProvider desmontar
    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);




  return (
    <AuthContext.Provider value={{ session, save, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
