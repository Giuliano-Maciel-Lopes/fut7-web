import { useRouter } from "next/router";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  msgNotfound?: string;
  icone?: LucideIcon
};


export function NotfoundItems({ msgNotfound }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4"></h1>
      <p className="mb-6">{msgNotfound}</p>
      <Button
        onClick={() => router.back()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Voltar
      </Button>
    </div>
  );
}
