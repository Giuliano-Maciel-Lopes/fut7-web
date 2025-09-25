import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Volleyball,
} from "lucide-react";

export const SectionFotter = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/assets/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Volleyball className="text-cyan-100" />
      </div>
{/* editar essa pag no fim do projeto com as ft do patrocniador e minhas redes sociais isso ta so para ex de com vai ficar */}
      <div className="container relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-center gap-6 text-center">
            <h1 className="text-heading-xl font-bold">Patrocinadores</h1>
            <div className="flex gap-4 text-blue-500">
              <Instagram size={32} />
              <Facebook size={32} />
              <Linkedin size={32} />
              <Twitter size={32} />
            </div>
          </div>

         
          <div className="w-full md:w-1/2 flex flex-col items-center gap-6 text-center">
            <h1 className="text-heading-xl font-bold">Contatos</h1>
            <div className="flex gap-4 text-green-500">
              <Instagram size={32} />
              <Facebook size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
