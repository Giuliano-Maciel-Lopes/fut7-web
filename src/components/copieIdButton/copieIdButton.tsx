import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  id: string;
};

export function CopyIdButton({ id }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className="text-sm px-2 py-1"
    >
      {copied ? "Copiado!" : "Copiar ID"}
    </Button>
  );
}
