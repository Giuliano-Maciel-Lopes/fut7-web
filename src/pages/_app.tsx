import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import type { AppProps } from "next/app";
import { QueryClientProvider , hydrate } from "@tanstack/react-query";
import { query } from "../services/reactquery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AsideAuthProvider } from "@/context/authaside";
import { GlobalAuth } from "@/components/auth/global/globalauth";
import { ToastProvider } from "@/services/toast";
import { AuthProvider } from "@/context/auth";
import { UseAuth } from "@/hooks/context/useAuth";


export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.dehydratedState) {
    hydrate(query, pageProps.dehydratedState);
  }
  
  return (
    
    <QueryClientProvider client={query}>
      <AuthProvider>
        <AsideAuthProvider>
          <Layout >
            <GlobalAuth />
            <ToastProvider />
            <Component {...pageProps} />
          </Layout>
        </AsideAuthProvider>
      </AuthProvider>

      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
