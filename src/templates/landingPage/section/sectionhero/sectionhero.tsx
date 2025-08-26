import { Button } from "@/components/ui/button";
import Image from "next/image";
import jogador from "../../../../assets/jogador futurista.jpg";
import { ChevronRight } from "lucide-react";

export function SectionHero() {
  return (
    <section className="mt-10">
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col w-full md:w-1/2 gap-6">
          <div className="text-blue-200 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <ChevronRight key={i} />
            ))}
          </div>

          <div className="bg-green-400 px-4 py-2 rounded-xl inline-block">
            <h3 className="text-heading-xl font-bold">
              KINGS 2025 VAI ENCARAR?
            </h3>
          </div>

          <h1 className="text-heading-hg font-extrabold">NEW SEASON</h1>

          <p className="text-lg leading-relaxed">
            O maior campeonato de Fut7 de ipatinga está de volta em 2025,
            trazendo muitas novidades, mais emoção e disputas inesquecíveis!
          </p>
          <Button className="w-32">INCREVA-SE</Button>

          <div className="text-blue-200  gap-1 flex justify-end">
            {[...Array(5)].map((_, i) => (
              <ChevronRight key={i} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center max-w-screnn">
          <Image src={jogador} alt="imagem" width={500} height={300} />
        </div>
      </div>
    </section>
  );
}
