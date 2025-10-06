import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import type { AppProps } from "next/app";
import { QueryClientProvider, hydrate } from "@tanstack/react-query";
import { query } from "../services/reactquery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AsideAuthProvider } from "@/context/authaside";
import { GlobalAuth } from "@/components/auth/global/globalauth";
import { ToastProvider } from "@/services/toast";
import { AuthProvider } from "@/context/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingServer } from "@/components/loading/loadingServer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (pageProps.dehydratedState) {
    hydrate(query, pageProps.dehydratedState);
  }

  return (
    <QueryClientProvider client={query}>
      <AuthProvider>
        <AsideAuthProvider>
          <Layout>
            <GlobalAuth />
            <ToastProvider />

          
            {loading && (
          <LoadingServer/>
            )}

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
