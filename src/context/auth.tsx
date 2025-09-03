import React, { createContext, useEffect, useState } from "react";
import { api } from "@/services/axios";
import { AuthResponse } from "@/types/auth";
import Cookies from "js-cookie";

type AuthContextType = {
  session: null |AuthResponse;
  save: (data: AuthResponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@Refund";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | AuthResponse>(null);

  function save(data: AuthResponse) {
    setSession(data);

      Cookies.set("token", data.token, { expires: 1 }); // expira em 7 dias
    Cookies.set("datauser", JSON.stringify(data.datauser), { expires: 1 });

      api.defaults.headers["Authorization"] = `Bearer ${data.token}`
  }

  function remove() {
     Cookies.remove("token");
    Cookies.remove("datauser");
    setSession(null);
    window.location.assign("/");
  }
  

  function loaduser() {
     const token = Cookies.get("token");
    const datauser = Cookies.get("datauser");
    api.defaults.headers["Authorization"] = `Bearer ${token}`

    if (token && datauser) {
      setSession({
        token,
        datauser: JSON.parse(datauser),
      });
      console.log("Token enviado:", token);
    }
  }

  useEffect(() => {
    loaduser();
    
    // Interceptor para deslogar no 401
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          remove();
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
