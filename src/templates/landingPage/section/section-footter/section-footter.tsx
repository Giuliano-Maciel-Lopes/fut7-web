import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Volleyball,
  Link,
} from "lucide-react";
import Image from "next/image";

export const SectionFotter = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/assets/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Volleyball className="text-cyan-100" />
      </div>

      <div className="container relative">
        <div className="flex flex-col md:flex-row">
          <div className=" relative w-full md:w-1/2 flex flex-col items-center gap-6 text-center">
            <Image
              src="/assets/patrocionio.png"
              alt="patrocinadores"
              width={200}
              height={100}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Contatos
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/giulianomaciel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-blue-100 transition shadow-md"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </Button>

              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/outralink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-blue-100 transition shadow-md"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </Button>

              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/outrolink2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-blue-100 transition shadow-md"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </Button>

              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/outrolink3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-blue-100 transition shadow-md"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
