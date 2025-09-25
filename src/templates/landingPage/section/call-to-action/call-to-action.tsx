import { InfoEventCart } from "./components/infoevent";
import { CardAction } from "./components/card-action";


export function CallToAction() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/assets/fundograma.png')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative py-4 flex flex-col items-center">
        <h1 className="text-heading-lg uppercase text-center text-white mb-8">
          Garanta sua vaga no Campeonato!
        </h1>

        <div className="flex flex-col gap-4">
          < InfoEventCart />

          <div className="flex flex-col md:flex-row gap-6 justify-center z-10">
            <CardAction title="Iscreva-se no site">
              <p className="text-heading-lg">
                Use nosso sistema de pagamento seguro via Stripe e garanta sua
                vaga imediatamente.
              </p>
            </CardAction>

            <CardAction
              link="www.linkedin.com/in/giulianomaciel"
              title="Inscreva-se pelo watzap  "
            >
              <p className="text-heading-lg mb-6">
                Fale com um administrador e passe os dados do seu time para se
                inscrever manualmente.
              </p>
            </CardAction>
          </div>
        </div>
      </div>
    </section>
  );
}
