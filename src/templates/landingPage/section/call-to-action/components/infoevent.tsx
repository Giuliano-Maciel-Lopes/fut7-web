import Image from "next/image";
import { CardAction } from "./card-action";

export function InfoEventCart() {
  return (
    <CardAction title="Informações do Evento">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 h-48 md:h-64">
          <Image
            fill
            alt="Imagem do evento"
            src="/assets/fundolandinpage.png"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h3 className="text-center text-heading-xl uppercase  text-blue-500">
            {" "}
            new date
          </h3>
          <div className="bg-green-500 p-5 max-w-max rounded-full ">
            <h3 className="text-heading text-white  text-heading-xl">
              1/11/2025
            </h3>
          </div>
          <p className="text-heading-xl flex text-ce"> O maior campeonato do Vale Do Aço </p>
        </div>
      </div>
    </CardAction>
  );
}
