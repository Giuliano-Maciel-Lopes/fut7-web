// pages/404.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom404() {
    // depois termina de estilizar
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-4">
      <h1 className="text-heading-hg text-red-500">404</h1>
      <p className="text-heading-xl mt-4">Ops! Impedimento marcado essa pagina nao existe!.</p>
      <Button asChild>
        <Link href="/">Voltar para Home</Link>
      </Button>
    </div>
  );
}
