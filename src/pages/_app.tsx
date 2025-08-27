import "@/styles/globals.css";
import { Layout } from "@/components/layouts";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { query } from "../services/reactquery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={query}>
      <Layout>
        <Component {...pageProps} />
      </Layout>


       {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
